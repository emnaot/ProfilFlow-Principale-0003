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
                  <ListItemText primary="15, boulevard Admiral Courbet, 69600 OULLINS" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="0483453355" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="prenom.nom@xxx.com" />
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
                  <ListItemText primary="Sales management" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="Business development" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="Commercial negotiating" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="Key account management" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarIcon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary="Leadership and team management" />
                </ListItem>
              </List>
            </Box>

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
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} sm={8}>
            <Box mb={4}>
              <Typography variant="h6" gutterBottom>Profile</Typography>
              <Typography variant="body1">
                Dynamic sales manager with more than X years of experience in sales and team management. Strong business development, negotiation, and key account management skills. Proven ability to achieve sales targets and significantly increase revenue. Results-oriented, motivated, and focused on customer satisfaction.
              </Typography>
            </Box>

            <Box mb={4}>
              <Typography variant="h6" gutterBottom>Expérience Professionnelle</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1">Sales Manager, Company ABC, City, Country</Typography>
                <Typography variant="subtitle2">January 20XX – Present</Typography>
                <Typography variant="body2">
                  <ul>
                    <li>Lead a team of X sales reps</li>
                    <li>Develop and implement sales strategies to meet and exceed monthly and annual sales targets</li>
                    <li>Build strong relationships with existing customers and key accounts</li>
                    <li>Negotiate contracts and agreements with clients</li>
                    <li>Prepare sales reports, performance analysis</li>
                  </ul>
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1">Sales Representative, Company XYZ, City, Country</Typography>
                <Typography variant="subtitle2">January 20XX – December 20XX</Typography>
                <Typography variant="body2">
                  <ul>
                    <li>Manage a portfolio of clients and develop new business relationships</li>
                    <li>Present products and services to potential customers</li>
                    <li>Negotiate terms of sale and conclude contracts successfully</li>
                    <li>Collaborate with internal teams to ensure customer satisfaction and resolve any issues</li>
                    <li>Achieve and exceed assigned sales targets</li>
                  </ul>
                </Typography>
              </Box>
            </Box>

            <Box mb={4}>
              <Typography variant="h6" gutterBottom>Education</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1">Bachelor of Business Administration, XYZ University, City, Country</Typography>
                <Typography variant="subtitle2">Year of graduation</Typography>
              </Box>
            </Box>

            <Box mb={4}>
              <Typography variant="h6" gutterBottom>Projet Académique</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1">Projet de fin d'études</Typography>
                <Typography variant="body2">
                  Description du projet académique, objectifs atteints et compétences développées.
                </Typography>
              </Box>
            </Box>

            <Box mb={4}>
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

            <Box mb={4}>
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

            <Box mb={4}>
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
        </Grid>
      </Paper>
    </Container>
  );
}

export default CVTemplate1;
