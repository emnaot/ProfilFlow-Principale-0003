import React, { useEffect, useState } from "react";
import { Container, Typography, Paper, Grid, Button, CircularProgress, TextField } from "@mui/material";
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
  fontSize: "1.5rem", // Agrandir la taille de la police des titres de section
}));

const FieldContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4), // Augmenter l'espacement entre les sections
  padding: theme.spacing(4), // Augmenter le padding des sections
  background: theme.palette.mode === "dark" ? "#222" : "#f9f9f9", // Changer les couleurs de fond des sections
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
}));

const FieldTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

const FieldValue = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  lineHeight: 1.6,
  whiteSpace: 'pre-line',
}));

const Profil = ({ collaboratorId }) => {
  const [cv, setCv] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editCV, setEditCV] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://localhost:45455/api/CV/getCVById/${collaboratorId}`)
      .then(response => response.json())
      .then(data => {
        setCv(data);
        setEditCV(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du CV:', error);
      })
      .finally(() => setLoading(false));
  }, [collaboratorId]);

  const handleUpdateClick = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    if (!collaboratorId) {
      alert('Erreur : ID du collaborateur non disponible.');
      return;
    }
    console.log("cv data-test1",editCV);
    console.log("cv data-test2",editCV[0]["Nom et Prénom"]);
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
    console.log("test123",formattedCV)
    console.log('Données envoyées :', JSON.stringify(formattedCV));

    fetch(`https://localhost:45455/api/CV/updateCVById/${collaboratorId}`, {
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
    if (typeof value === 'object' && value !== null) {
      return (
        <FieldContainer key={key}>
          <FieldTitle variant="h6">{key}</FieldTitle>
          {Object.keys(value).map(subKey => (
            <div key={subKey} style={{ marginLeft: '20px' }}>
              <FieldTitle variant="subtitle2">{subKey}:</FieldTitle>
              <FieldValue variant="body2">{value[subKey]}</FieldValue>
            </div>
          ))}
        </FieldContainer>
      );
    }
    return (
      <FieldContainer key={key}>
        <FieldTitle variant="h6">{key}</FieldTitle>
        <FieldValue variant="body2">{value}</FieldValue>
      </FieldContainer>
    );
  };

  const renderEditContent = (key, value, path) => {
    if (typeof value === 'object' && value !== null) {
      return (
        <div style={{ marginLeft: '20px' }}>
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
                <Button variant="contained" color="primary" onClick={handleSave}>
                  Enregistrer
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="secondary" onClick={handleCancel}>
                  Annuler
                </Button>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            {Object.keys(cv).map(key => renderContent(key, cv[key]))}
            <Button variant="contained" color="primary" onClick={handleUpdateClick} sx={{ mt: 4 }}>
              Mettre à jour
            </Button>
          </>
        )}
      </StyledPaper>
    </Container>
  );
};

export default Profil;
