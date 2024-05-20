import React from 'react';
import { Container, Grid, Paper, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';

const CVTemplate1 = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          {/* Left Side */}
          <Grid item xs={12} sm={4} style={{ backgroundColor: '#2A3A4A', color: 'white', padding: '20px' }}>
            <Box display="flex" justifyContent="center" mb={2}>
              <Avatar alt="Prénom Nom" src="/static/images/avatar/1.jpg" style={{ width: '100px', height: '100px' }} />
            </Box>
            <Typography variant="h5" align="center" gutterBottom>Prénom Nom</Typography>
            <Typography variant="h6" align="center" gutterBottom>Titre du CV</Typography>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Informations personnelles</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
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
              </List>
            </Box>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Compétences</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="" />
                </ListItem>
              </List>
            </Box>

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
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} sm={8}>
            <Box mb={4}>
              <Typography variant="h6" gutterBottom>Profile</Typography>
              <Typography variant="body1">
                {/* Profile Content */}
              </Typography>
            </Box>

            <Box mb={4}>
              <Typography variant="h6" gutterBottom>Expérience Professionnelle</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1"></Typography>
                <Typography variant="subtitle2"></Typography>
                <Typography variant="body2">
                  <ul>
                    <li></li>
                    <li></li>
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
                    <li></li>
                    <li></li>
                  </ul>
                </Typography>
              </Box>
            </Box>

            <Box mb={4}>
              <Typography variant="h6" gutterBottom>Education</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1"></Typography>
                <Typography variant="subtitle2"></Typography>
              </Box>
            </Box>

            <Box mb={4}>
              <Typography variant="h6" gutterBottom>Projet Académique</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1"></Typography>
                <Typography variant="body2">
                  {/* Project Content */}
                </Typography>
              </Box>
            </Box>

            <Box mb={4}>
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

            <Box mb={4}>
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

            <Box mb={4}>
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
        </Grid>
      </Paper>
    </Container>
  );
}

export default CVTemplate1;
