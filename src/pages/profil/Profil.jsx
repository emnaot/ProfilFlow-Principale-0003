import React, { useEffect, useState } from "react";
import { useAuth } from "AuthContext";
import { Container, Typography, Paper, Grid, Button, TextField, CircularProgress, Card, CardContent, CardHeader, Divider, Avatar } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  marginTop: theme.spacing(6),
  background: theme.palette.mode === "dark" ? "linear-gradient(145deg, #333, #444)" : "linear-gradient(145deg, #fff, #eee)",
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
  "&:hover": {
    transform: "scale(1.02)",
    transition: "transform 0.3s ease-in-out",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  color: theme.palette.mode === "dark" ? "#bb86fc" : "#0d3d73",
  fontSize: "1.5rem",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#ff79c6" : "#1d7cd6",
  },
}));

const FieldLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#bb86fc" : "#0d3d73",
  fontWeight: "bold",
}));

const FieldValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#cfcfcf" : "#333",
  backgroundColor: theme.palette.mode === "dark" ? "#444" : "#f5f5f5",
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const Profil = () => {
  const { user } = useAuth();
  const [cv, setCv] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editCV, setEditCV] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user || !user.mail) return;

    setLoading(true);
    fetch(`https://localhost:45455/api/CV/getCVByEmail/${encodeURIComponent(user.mail)}`)
      .then(response => response.json())
      .then(data => {
        setCv(data);
        setEditCV(data); // Clone initial data for editing
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du CV:', error);
      })
      .finally(() => setLoading(false));
  }, [user]);

  const handleUpdateClick = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    if (!user || !user.mail) {
      alert('Erreur : Adresse e-mail non disponible.');
      return;
    }

    const formattedCV = [{
      "Nom et Prénom": editCV[0]["Nom et Prénom"],
      "Titre du cv": editCV[0]["Titre du cv"],
      "Informations personnelles": editCV[0]["Informations Personnelles"],
      "Education": editCV[0]["Education"],
      "Compétences": editCV[0]["Compétences"],
      "Projet académique": editCV[0]["Projet Académique"],
      "Experience professionnelle": editCV[0]["Experience Professionnelle"],
      "Langues": editCV[0]["Langues"],
      "Certifications": editCV[0]["Certifications"],
      "Vie Associative": editCV[0]["Vie Associative"],
      "Centre d'interet": editCV[0]["Centre d'interet"]
    }];

    setLoading(true);
    console.log("test123", formattedCV);
    console.log('Données envoyées :', JSON.stringify(formattedCV));

    fetch(`https://localhost:45455/api/CV/updateCVByEmail/${encodeURIComponent(user.mail)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedCV),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Réponse réseau non OK');
      }
      return response.json();
    })
    .then(() => {
      setCv(editCV);
      setEditMode(false);
      alert("CV mis à jour avec succès !");
    })
    .catch(error => {
      console.error('Erreur lors de la mise à jour du CV:', error);
      alert("Erreur lors de la mise à jour du CV: " + error.message);
    })
    .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    setEditCV(cv);
    setEditMode(false);
  };

  const renderContent = (key, value) => {
    const avatarUrl = ""; // Remplacez par l'URL de votre photo
    if (typeof value === 'object' && value !== null) {
      return (
        <React.Fragment key={key}>
          <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
            <CardHeader
              avatar={<Avatar sx={{ width: 72, height: 72 }} src={avatarUrl}>{key.charAt(0)}</Avatar>}
              titleTypographyProps={{ variant: 'h6', color: 'primary' }}
            />
            <CardContent>
              {Object.keys(value).map(subKey => (
                <div key={subKey} style={{ marginBottom: '10px' }}>
                  <FieldLabel variant="subtitle2">{subKey}:</FieldLabel>
                  <FieldValue variant="body2" component="pre">{value[subKey]}</FieldValue>
                </div>
              ))}
            </CardContent>
          </Card>
          <Divider sx={{ my: 2 }} />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={key}>
        <Card sx={{ mb: 3, borderRadius: '12px', boxShadow: 3 }}>
          <CardHeader
            avatar={<Avatar sx={{ width: 72, height: 72 }} src={avatarUrl}>{key.charAt(0)}</Avatar>}
            title={key}
            titleTypographyProps={{ variant: 'h6', color: 'primary' }}
          />
          <CardContent>
            <FieldValue component="pre">{value}</FieldValue>
          </CardContent>
        </Card>
        <Divider sx={{ my: 2 }} />
      </React.Fragment>
    );
  };

  const renderEditContent = (key, value, path) => {
    if (typeof value === 'object' && value !== null) {
      return (
        <div key={key} style={{ marginLeft: '20px' }}>
          {Object.keys(value).map(subKey => (
            <div key={subKey}>
              <SectionTitle>{subKey}</SectionTitle>
              {renderEditContent(subKey, value[subKey], `${path}.${subKey}`)}
            </div>
          ))}
        </div>
      );
    }
    return (
      <TextField
        fullWidth
        multiline
        variant="outlined"
        value={value || ""}
        onChange={e => {
          const newValue = e.target.value;
          setEditCV(prevState => {
            const newState = { ...prevState };
            const keys = path.split('.');
            let obj = newState;
            for (let i = 0; i < keys.length - 1; i++) {
              obj = obj[keys[i]];
            }
            obj[keys[keys.length - 1]] = newValue;
            return newState;
          });
        }}
        sx={{ mb: 2 }}
      />
    );
  };

  if (loading) return <CircularProgress />;

  if (!cv) return <Typography>Chargement du CV...</Typography>;

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 8 }}>
      <StyledPaper>
        {editMode ? (
          <>
            {Object.keys(cv).map(key => (
              <div key={key}>
                <SectionTitle>{key}</SectionTitle>
                {renderEditContent(key, cv[key], key)}
              </div>
            ))}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6}>
                <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleSave}>
                  Enregistrer
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="secondary" startIcon={<CancelIcon />} onClick={handleCancel}>
                  Annuler
                </Button>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            {Object.keys(cv).map(key => renderContent(key, cv[key]))}
            <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={handleUpdateClick} sx={{ mt: 4 }}>
              Mettre à jour
            </Button>
          </>
        )}
      </StyledPaper>
    </Container>
  );
};

export default Profil;
