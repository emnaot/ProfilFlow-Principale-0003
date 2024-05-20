import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';

const CVTemplate2 = ({ cvData }) => {
  if (!cvData) return <Typography>Chargement des données du CV...</Typography>;

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>Nom et Prénom</Typography>
          <Typography variant="body1">{cvData["Nom et Prénom"]}</Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>Titre du cv</Typography>
          <Typography variant="body1">{cvData["Titre du cv"]}</Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>Informations Personnelles</Typography>
          <Typography variant="body1">{cvData["Informations Personnelles"]}</Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>Education</Typography>
          <Typography variant="body1">{cvData["Education"]}</Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>Compétences</Typography>
          <Typography variant="body1">{cvData["Compétences"]}</Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>Projet Académique</Typography>
          <Typography variant="body1">{cvData["Projet Académique"]}</Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>Experience Professionnelle</Typography>
          <Typography variant="body1">{cvData["Experience Professionnelle"]}</Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>Langues</Typography>
          <Typography variant="body1">{cvData["Langues"]}</Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>Certifications</Typography>
          <Typography variant="body1">{cvData["Certifications"]}</Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>Vie Associative</Typography>
          <Typography variant="body1">{cvData["Vie Associative"]}</Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>Centre d'intérêt</Typography>
          <Typography variant="body1">{cvData["Centre d'interet"]}</Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default CVTemplate2;
