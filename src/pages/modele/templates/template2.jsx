import React from 'react';
import { Container, Grid, Paper, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, Box, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const CVTemplate2 = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          {/* Header */}
          <Grid item xs={12} style={{ textAlign: 'left' }}>
            <Typography variant="h3" component="h1" style={{ color: '#008000' }}>Prénom Nom</Typography>
            <Typography variant="h5" component="h2" gutterBottom>Titre du CV</Typography>
          </Grid>

          {/* Avatar and Contact */}
          <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
            <Avatar alt="Prénom Nom" src="/static/images/avatar/1.jpg" style={{ width: '150px', height: '150px', margin: 'auto' }} />
            <List style={{ marginTop: '20px', textAlign: 'left' }}>
              <ListItem>
                <ListItemIcon>
                  <LinkedInIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary={<Link href="#" target="_blank" rel="noopener">linkedin.com/in/name</Link>} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="" />
              </ListItem>
            </List>

            {/* Centre d'intérêt */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Centre d'intérêt</Typography>
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

            {/* Langues */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Langues</Typography>
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

            {/* Compétences */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Compétences</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <StarIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="" />
              </ListItem>
            </List>

            {/* Certifications */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Certifications</Typography>
            <List>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
            </List>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} sm={8}>
            {/* Expérience Professionnelle */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Expérience Professionnelle</Typography>
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

            {/* Education */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Education</Typography>
            <Box mb={2}>
              <Typography variant="subtitle1"></Typography>
              <Typography variant="subtitle2"></Typography>
            </Box>

            {/* Projet Académique */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Projet Académique</Typography>
            <Box mb={2}>
              <Typography variant="subtitle1"></Typography>
              <Typography variant="body2">
                {/* Description du projet académique */}
              </Typography>
            </Box>

            {/* Vie Associative */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Vie Associative</Typography>
            <List>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemText primary="" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default CVTemplate2;
