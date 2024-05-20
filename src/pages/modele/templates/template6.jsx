import React from 'react';
import { Container, Paper, Typography, Box, Grid, Avatar, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  background: '#fdf7f5',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
  borderBottom: `4px solid ${theme.palette.primary.main}`,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  color: '#d96c75',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: '#b45f6f',
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#d96c75',
  marginBottom: theme.spacing(2),
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  paddingBottom: theme.spacing(1),
}));

const Sidebar = styled(Box)(({ theme }) => ({
  backgroundColor: '#fbeae9',
  padding: theme.spacing(2),
  borderRadius: '10px',
}));

const CVTemplate6 = ({ cvData }) => {
  if (!cvData) return <Typography>Chargement des données du CV...</Typography>;

  return (
    <Container maxWidth="lg">
      <StyledPaper>
        <Header>
          <Avatar alt={cvData["Nom et Prénom"]} src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100, marginRight: 2 }} />
          <Box>
            <Title variant="h4">{cvData["Nom et Prénom"]}</Title>
            <Subtitle variant="h6">{cvData["Titre du cv"]}</Subtitle>
          </Box>
        </Header>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Sidebar>
              <Section>
                <SectionTitle variant="h6">Contact</SectionTitle>
                <List>
                  <ListItem>
                    <ListItemText primary={cvData["Téléphone"]} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={cvData["Email"]} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={cvData["Adresse"]} />
                  </ListItem>
                </List>
              </Section>

              <Section>
                <SectionTitle variant="h6">Compétences</SectionTitle>
                <Typography variant="body1">{cvData["Compétences"]}</Typography>
              </Section>

              <Section>
                <SectionTitle variant="h6">Langues</SectionTitle>
                <Typography variant="body1">{cvData["Langues"]}</Typography>
              </Section>

              <Section>
                <SectionTitle variant="h6">Loisirs</SectionTitle>
                <Typography variant="body1">{cvData["Centre d'interet"]}</Typography>
              </Section>
            </Sidebar>
          </Grid>

          <Grid item xs={12} md={8}>
            <Section>
              <SectionTitle variant="h5">Profil</SectionTitle>
              <Typography variant="body1">{cvData["Informations Personnelles"]}</Typography>
            </Section>

            <Section>
              <SectionTitle variant="h5">Formation</SectionTitle>
              <Typography variant="body1">{cvData["Education"]}</Typography>
            </Section>

            <Section>
              <SectionTitle variant="h5">Expériences</SectionTitle>
              <Typography variant="body1">{cvData["Experience Professionnelle"]}</Typography>
            </Section>

            <Section>
              <SectionTitle variant="h5">Projets Académiques</SectionTitle>
              <Typography variant="body1">{cvData["Projet Académique"]}</Typography>
            </Section>

            <Section>
              <SectionTitle variant="h5">Vie Associative</SectionTitle>
              <Typography variant="body1">{cvData["Vie Associative"]}</Typography>
            </Section>

            <Section>
              <SectionTitle variant="h5">Certifications</SectionTitle>
              <Typography variant="body1">{cvData["Certifications"]}</Typography>
            </Section>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
}

export default CVTemplate6;
