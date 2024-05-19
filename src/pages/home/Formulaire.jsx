import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  useTheme,
  IconButton,
} from "@mui/material";
import { Person as PersonIcon, Close as CloseIcon } from "@mui/icons-material";

const FormulaireProfil = () => {
  const theme = useTheme();

  const [formValues, setFormValues] = useState({
    Formations: "",
    Durée_Expériencess: "",
    Technologies_Demandées: "",
    Description_Mission: "",
  });

  const [topCandidates, setTopCandidates] = useState([]);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Données du formulaire :", formValues);

    try {
      const response = await fetch("https://localhost:45455/api/Formulaire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi des données au backend .NET");
      }

      const topCandidates = await response.json();
      console.log("Top 3 des candidats :", topCandidates);
      setTopCandidates(topCandidates);
      setOpen(true); // Ouvrir la boîte de dialogue
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{
        mb: 2,
        boxShadow:
          theme.palette.mode === "light"
            ? "0 8px 30px -5px rgba(0,0,0,0.3)"
            : "0 8px 30px -5px rgba(255,255,255,0.3)",
        maxWidth: "100%",
        minHeight: "400px",
        backgroundColor: theme.palette.mode === "light" ? "#f5f5f5" : "#333",
        borderRadius: "20px",
        transition: "transform 0.2s, box-shadow 0.2s",
        ":hover": {
          boxShadow:
            theme.palette.mode === "light"
              ? "0 10px 40px -7px rgba(0,0,0,0.4)"
              : "0 10px 40px -7px rgba(255,255,255,0.4)",
          transform: "scale(1.05)",
        },
        marginLeft: "calc(2% - 60px)",
        marginRight: "calc(10% - 60px)",
        mt: -7,
        padding: "2rem",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            textShadow:
              theme.palette.mode === "light"
                ? "1px 1px 2px rgba(0,0,0,0.5)"
                : "1px 1px 2px rgba(255,255,255,0.5)",
            color: theme.palette.mode === "light" ? "inherit" : "white",
          }}
        >
          Détails de la mission
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            {[
              "Formations",
              "Durée_Expériencess",
              "Technologies_Demandées",
              "Description_Mission",
            ].map((field, index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  fullWidth
                  size="small"
                  id={field}
                  label={field.replace("_", " ")}
                  name={field}
                  value={formValues[field]}
                  onChange={handleChange}
                  InputLabelProps={{
                    style: {
                      fontStyle: "italic",
                      color:
                        theme.palette.mode === "light" ? "#666" : "rgba(255,255,255,0.7)",
                    },
                  }}
                  InputProps={{
                    style: {
                      color: theme.palette.mode === "light" ? "inherit" : "white",
                    },
                  }}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="small"
                sx={{
                  mt: 3,
                  bgcolor:
                    theme.palette.mode === "light" ? "#357dd7" : "#90caf9",
                  boxShadow: "0px 3px 5px rgba(0,0,0,0.2)",
                  borderRadius: "12px",
                  color: theme.palette.mode === "light" ? "white" : "inherit",
                }}
              >
                Rechercher
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
          sx={{
            "& .MuiDialog-paper": {
              borderRadius: "20px",
              padding: "1.5rem",
              backgroundColor: theme.palette.mode === "light" ? "#f9f9f9" : "#424242",
              boxShadow: theme.palette.mode === "light"
                ? "0 20px 40px rgba(0,0,0,0.2)"
                : "0 20px 40px rgba(255,255,255,0.2)",
              animation: "fadeIn 0.5s",
            },
            "@keyframes fadeIn": {
              "0%": { opacity: 0, transform: "translateY(-20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 0 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: theme.palette.primary.main }}>
              Top 3 Collaborateurs Adéquats
            </Typography>
            <IconButton onClick={handleClose} color="inherit">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers sx={{ backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#333333" }}>
            {topCandidates.length > 0 ? (
              <List>
                {topCandidates.map((candidate, index) => (
                  <React.Fragment key={index}>
                    <ListItem sx={{ py: 2 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 56, height: 56 }}>
                          <PersonIcon fontSize="large" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={candidate}
                        primaryTypographyProps={{
                          variant: "h6",
                          color: theme.palette.text.primary,
                          style: { fontWeight: "500", marginLeft: theme.spacing(2) },
                        }}
                      />
                    </ListItem>
                    {index < topCandidates.length - 1 && <Divider variant="middle" />}
                  </React.Fragment>
                ))}
              </List>
            ) : (
              <Typography align="center" variant="h6" color="error">
                Aucun collaborateur trouvé
              </Typography>
            )}
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", backgroundColor: theme.palette.background.paper }}>
            <Button onClick={handleClose} variant="contained" color="secondary" sx={{ borderRadius: "20px", px: 3 }}>
              Fermer
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default FormulaireProfil;
