import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InputFileUpload from "./InputFileUpload";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Dialog, DialogTitle, DialogContent, CircularProgress } from "@mui/material";
import Profil from "../profil/Profilcollab"; // Assurez-vous que le chemin est correct

export default function DataTable() {
  const [rows, setRows] = useState([]);
  const [roles, setRoles] = useState([]);
  const [base64String, setBase64String] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedCollaborator, setSelectedCollaborator] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const groupMembersResponse = await fetch("https://localhost:45455/api/CosmosDB/getgroupMembers");
        const rolesResponse = await fetch("https://localhost:45455/api/Roles");

        if (!groupMembersResponse.ok || !rolesResponse.ok) {
          throw new Error("Server Error or Data Not Found");
        }

        const membersData = await groupMembersResponse.json();
        const rolesData = await rolesResponse.json();

        setRows(
          membersData.map((item) => ({
            ...item,
            id: item.id,
            role: item.role || "Collaborateur", // Rôle par défaut défini ici
          }))
        );
        setRoles(rolesData);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }

    fetchData();
  }, []);

  const handleRoleChange = async (newRole, id) => {
    console.log("newRole", newRole);
    console.log("id-tsest", id);
    const response = await fetch(
      `https://localhost:45455/api/CosmosDB/updateGroupMemberRole/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRole),
      }
    );

    if (response.ok) {
      console.log("test13");
      const updatedRows = rows.map((row) =>
        row.id === id ? { ...row, role: newRole } : row
      );
      console.log("updatedRows", updatedRows);
      setRows(updatedRows);
    } else {
      const errorText = await response.text();
      console.error("Failed to update role:", response.status, errorText);
    }
  };

  const sendBase64AndIdToServer = async (base64String, collaboratorId) => {
    try {
      const response = await fetch("https://localhost:45455/Base64", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          base64String: base64String,
          collaboratorId: collaboratorId,
        }),
      });
      if (response.ok) {
        console.log("Base64 and ID sent successfully to the server.");
      } else {
        console.error(
          "Failed to send Base64 and ID to server:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error sending Base64 and ID to server:", error);
    }
  };

  const handleFileUpload = (base64, collaboratorId) => {
    console.log("Uploaded file in Base64:", base64);
    console.log("Collaborator ID:", collaboratorId);
    setBase64String(base64);
    sendBase64AndIdToServer(base64, collaboratorId);
  };

  const handleDeleteCV = async (id) => {
    try {
      const response = await fetch(`https://localhost:45455/api/CV/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log("CV deleted successfully.");
        setRows(rows.map(row => row.id === id ? { ...row, profil: null } : row));
      } else {
        console.error("Failed to delete CV:", response.status);
      }
    } catch (error) {
      console.error("Error deleting CV:", error);
    }
  };

  const handleEditClick = (collaboratorId) => {
    setSelectedCollaborator(collaboratorId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCollaborator(null);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "displayName",
      headerName: "Nom_Prénom",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "mail",
      headerName: "Email",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "role",
      headerName: "Rôle",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <>
          <Select
            labelId="role-select-label"
            id="role-select"
            value={params.value}
            onChange={(e) => handleRoleChange(e.target.value, params.id)}
            displayEmpty
            fullWidth
          >
            {roles.map((role) => (
              <MenuItem key={role.id} value={role.roles}>
                {role.roles}
              </MenuItem>
            ))}
          </Select>
        </>
      ),
    },
    {
      field: "CV",
      headerName: "CV",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div>
          <IconButton
            aria-label="edit"
            onClick={() => handleEditClick(params.row.id)}
            style={{ color: "Primary" }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDeleteCV(params.row.id)}
            style={{ color: "#9c27b0" }}
          >
            <DeleteIcon />
          </IconButton>
          <InputFileUpload
            collaboratorId={params.row.id}
            onFileUpload={handleFileUpload}
          />
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        autoHeight
        rowsPerPageOptions={[5]}
      />
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Curriculum Vitæ </DialogTitle>
        <DialogContent>
          {selectedCollaborator ? (
            <Profil collaboratorId={selectedCollaborator} />
          ) : (
            <CircularProgress />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
