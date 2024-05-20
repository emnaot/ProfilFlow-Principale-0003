import React from 'react';
import { Container, Paper, Typography, Box, Grid, Avatar, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  background: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const DividerStyled = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  backgroundColor: theme.palette.primary.main,
}));

const CVTemplate2 = ({ cvData }) => {
  if (!cvData) return <Typography>Chargement des données du CV...</Typography>;

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Header>
          <Avatar alt={cvData["Nom et Prénom"]} src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100, marginRight: 2 }} />
          <Box>
            <Title variant="h4">{cvData["Nom et Prénom"]}</Title>
            <Subtitle variant="h6">{cvData["Titre du cv"]}</Subtitle>
          </Box>
        </Header>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Section>
              <SectionTitle variant="h5">Expériences Professionnelles</SectionTitle>
              <Typography variant="body1">{cvData["Experience Professionnelle"]}</Typography>
            </Section>

            <DividerStyled />

            <Section>
              <SectionTitle variant="h5">Formation</SectionTitle>
              <Typography variant="body1">{cvData["Education"]}</Typography>
            </Section>

            <DividerStyled />

            <Section>
              <SectionTitle variant="h5">Projet Académique</SectionTitle>
              <Typography variant="body1">{cvData["Projet Académique"]}</Typography>
            </Section>

            <DividerStyled />

            <Section>
              <SectionTitle variant="h5">Certifications</SectionTitle>
              <Typography variant="body1">{cvData["Certifications"]}</Typography>
            </Section>

            <DividerStyled />

            <Section>
              <SectionTitle variant="h5">Vie Associative</SectionTitle>
              <Typography variant="body1">{cvData["Vie Associative"]}</Typography>
            </Section>
          </Grid>

          <Grid item xs={12} md={4} style={{ backgroundColor: '#2A3A4A', color: 'white', padding: '20px' }}>
            <Section>
              <SectionTitle variant="h5">Informations Personnelles</SectionTitle>
              <Typography variant="body1">{cvData["Informations Personnelles"]}</Typography>
            </Section>

            <DividerStyled style={{ backgroundColor: 'white' }} />

            <Section>
              <SectionTitle variant="h5">Langues</SectionTitle>
              <Typography variant="body1">{cvData["Langues"]}</Typography>
            </Section>

            <DividerStyled style={{ backgroundColor: 'white' }} />

            <Section>
              <SectionTitle variant="h5">Compétences</SectionTitle>
              <Typography variant="body1">{cvData["Compétences"]}</Typography>
            </Section>

            <DividerStyled style={{ backgroundColor: 'white' }} />

            <Section>
              <SectionTitle variant="h5">Centre d'intérêt</SectionTitle>
              <Typography variant="body1">{cvData["Centre d'interet"]}</Typography>
            </Section>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
}

export default CVTemplate2;
