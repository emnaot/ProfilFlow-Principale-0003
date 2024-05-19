import React from 'react';
import { Container, Grid, Paper, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, Box, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const CVTemplate3 = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#F8EDEB' }}>
        <Grid container spacing={3}>
          {/* Header */}
          <Grid item xs={12} style={{ textAlign: 'center', color: '#E07A5F' }}>
            <Typography variant="h3" component="h1">Prénom Nom</Typography>
            <Typography variant="h5" component="h2" gutterBottom>Titre du CV</Typography>
          </Grid>

          {/* Informations personnelles */}
          <Grid item xs={12} sm={4} style={{ backgroundColor: '#B5838D', color: 'white', padding: '20px' }}>
            <Box display="flex" justifyContent="center" mb={2}>
              <Avatar alt="Prénom Nom" src="/static/images/avatar/1.jpg" style={{ width: '100px', height: '100px' }} />
            </Box>
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Informations personnelles</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="06 06 06 06 06" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="prenom.nom@xxx.com" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="Ville, Pays" />
                </ListItem>
              </List>
            </Box>

            {/* Compétences */}
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Compétences</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Excel, Word, PowerPoint, Outlook" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Gestion en équipe, Management" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Gestion de site, SEO" />
                </ListItem>
              </List>
            </Box>

            {/* Langues */}
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Langues</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Français" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Anglais" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Allemand" />
                </ListItem>
              </List>
            </Box>

            {/* Certifications */}
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Certifications</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Certification A" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Certification B" />
                </ListItem>
              </List>
            </Box>

            {/* Vie Associative */}
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Vie Associative</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Membre de l'association XYZ" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Bénévole à ABC" />
                </ListItem>
              </List>
            </Box>

            {/* Centre d'intérêt */}
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Centre d'intérêt</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Lecture" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Voyages" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sports" />
                </ListItem>
              </List>
            </Box>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} sm={8}>
            {/* Education */}
            <Box mb={4}>
              <Typography variant="h6" gutterBottom style={{ color: '#E07A5F' }}>Education</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1">École de Mode</Typography>
                <Typography variant="subtitle2">Sept. 2022 - Juin 2023</Typography>
                <Typography variant="body2">EDM - Paris</Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1">Baccalauréat STD2A</Typography>
                <Typography variant="subtitle2">2021</Typography>
                <Typography variant="body2">Lycée Blaise Pascal - Paris</Typography>
              </Box>
            </Box>

            {/* Projet académique */}
            <Box mb={4}>
              <Typography variant="h6" gutterBottom style={{ color: '#E07A5F' }}>Projet académique</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1">Projet de fin d'études</Typography>
                <Typography variant="body2">
                  Description du projet académique, objectifs atteints et compétences développées.
                </Typography>
              </Box>
            </Box>

            {/* Expérience Professionnelle */}
            <Box mb={4}>
              <Typography variant="h6" gutterBottom style={{ color: '#E07A5F' }}>Expérience Professionnelle</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1">Styliste Modéliste</Typography>
                <Typography variant="subtitle2">Poste occupé | Ville, Pays</Typography>
                <Typography variant="body2">
                  <ul>
                    <li>Création de vêtements et d'accessoires.</li>
                    <li>Élaboration des collections de mode.</li>
                    <li>Suivi de la fabrication et des relations avec les fournisseurs.</li>
                  </ul>
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1">Styliste Modéliste</Typography>
                <Typography variant="subtitle2">Poste occupé | Ville, Pays</Typography>
                <Typography variant="body2">
                  <ul>
                    <li>Création de nouvelles collections de stylisme et de vêtements.</li>
                    <li>Élaboration des plans de collections et des plannings pour la production.</li>
                  </ul>
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1">Styliste Modéliste</Typography>
                <Typography variant="subtitle2">Poste occupé | Ville, Pays</Typography>
                <Typography variant="body2">
                  <ul>
                    <li>Réalisation des collections et gestion de la production.</li>
                    <li>Développement des accessoires et suivi de la production.</li>
                  </ul>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default CVTemplate3;
