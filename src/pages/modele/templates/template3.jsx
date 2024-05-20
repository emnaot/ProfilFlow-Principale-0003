import React from 'react';
import { Container, Grid, Paper, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, Box, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

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
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </Box>

            {/* Compétences */}
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Compétences</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </Box>

            {/* Langues */}
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Langues</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </Box>

            {/* Certifications */}
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Certifications</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </Box>

            {/* Vie Associative */}
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Vie Associative</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </Box>

            {/* Centre d'intérêt */}
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Centre d'intérêt</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="" />
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
                <Typography variant="subtitle1"></Typography>
                <Typography variant="subtitle2"></Typography>
                <Typography variant="body2"></Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1"></Typography>
                <Typography variant="subtitle2"></Typography>
                <Typography variant="body2"></Typography>
              </Box>
            </Box>

            {/* Projet académique */}
            <Box mb={4}>
              <Typography variant="h6" gutterBottom style={{ color: '#E07A5F' }}>Projet académique</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1"></Typography>
                <Typography variant="body2"></Typography>
              </Box>
            </Box>

            {/* Expérience Professionnelle */}
            <Box mb={4}>
              <Typography variant="h6" gutterBottom style={{ color: '#E07A5F' }}>Expérience Professionnelle</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1"></Typography>
                <Typography variant="subtitle2"></Typography>
                <Typography variant="body2">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1"></Typography>
                <Typography variant="subtitle2"></Typography>
                <Typography variant="body2">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1"></Typography>
                <Typography variant="subtitle2"></Typography>
                <Typography variant="body2">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
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
