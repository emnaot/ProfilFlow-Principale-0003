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
                <ListItemText primary={<Link href="https://linkedin.com/in/name" target="_blank" rel="noopener">linkedin.com/in/name</Link>} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="prenom.nom@xxx.com" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="06 06 06 06 06" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="Ville, Pays" />
              </ListItem>
            </List>

            {/* Centre d'intérêt */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Centre d'intérêt</Typography>
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

            {/* Langues */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Langues</Typography>
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

            {/* Compétences */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Compétences</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <StarIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="Sales management" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="Business development" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="Commercial negotiating" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="Key account management" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon style={{ color: '#008000' }} />
                </ListItemIcon>
                <ListItemText primary="Leadership and team management" />
              </ListItem>
            </List>

            {/* Certifications */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Certifications</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Certification A" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Certification B" />
              </ListItem>
            </List>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} sm={8}>
            {/* Expérience Professionnelle */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Expérience Professionnelle</Typography>
            <Box mb={2}>
              <Typography variant="subtitle1">Sales Manager, Company ABC, City, Country</Typography>
              <Typography variant="subtitle2">Jan 2020 - Aug 2022</Typography>
              <Typography variant="body2">
                <ul>
                  <li>Boosted sales activities by 30% in the west coast region by overseeing the process and operations of closing deals.</li>
                  <li>Maintained a 100% client satisfaction rating and generated 10% growth in annual sales revenue by working closely with sales and support teams.</li>
                  <li>Opened five new accounts by providing prompt and consistent, quality customer service.</li>
                </ul>
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="subtitle1">Field Sales Manager, Content Company, Inc.</Typography>
              <Typography variant="subtitle2">Jan 2018 - Jan 2020</Typography>
              <Typography variant="body2">
                <ul>
                  <li>Increased customer loyalty by 40% within six months of managing key accounts on the east coast while serving as a coordinator within the operations team.</li>
                  <li>Achieved a 10% growth rate in our client base by finding opportunities within key accounts for strategic partnerships.</li>
                  <li>Boosted customer satisfaction by 33% after six months.</li>
                </ul>
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="subtitle1">Sales Intern, Technology Company, Inc.</Typography>
              <Typography variant="subtitle2">Jan 2020 - Aug 2022</Typography>
              <Typography variant="body2">
                <ul>
                  <li>Boosted sales activities by 30% in the west coast region by overseeing the process and operations of closing deals.</li>
                  <li>Maintained a 100% client satisfaction rating and generated 10% growth in annual sales revenue by working closely with sales and support teams.</li>
                  <li>Opened five new accounts by providing prompt and consistent, quality customer service.</li>
                </ul>
              </Typography>
            </Box>

            {/* Education */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Education</Typography>
            <Box mb={2}>
              <Typography variant="subtitle1">Bachelor of Business Administration, XYZ University, City, Country</Typography>
              <Typography variant="subtitle2">Year of graduation</Typography>
            </Box>

            {/* Projet Académique */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Projet Académique</Typography>
            <Box mb={2}>
              <Typography variant="subtitle1">Projet de fin d'études</Typography>
              <Typography variant="body2">
                Description du projet académique, objectifs atteints et compétences développées.
              </Typography>
            </Box>

            {/* Vie Associative */}
            <Typography variant="h6" gutterBottom style={{ color: '#008000' }}>Vie Associative</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Membre de l'association XYZ" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bénévole à ABC" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default CVTemplate2;
