import React, { useState } from "react";
import { Typography, Grid, Container, Card, CardContent, CardMedia, CardActionArea, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import CVTemplate1 from "./templates/template1";
import CVTemplate2 from "./templates/template2";
import CVTemplate3 from "./templates/template3";

// Placeholder images for the templates
const templateImages = {
  template1: "/images/1.png",
  template2: "/images/2.png",
  template3: "/images/3.png",
};

const Modele = () => {
  const [open, setOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleOpen = (template) => {
    setSelectedTemplate(template);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTemplate(null);
  };

  const handleGenerate = (template) => {
    console.log(`Générer le modèle: ${template}`);
    // Ajoutez ici la logique pour générer le modèle
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" gutterBottom>
        Page des Modèles
      </Typography>
      <Typography variant="body1">
        Bienvenue sur la page des Modèles de votre application.
      </Typography>

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea onClick={() => handleOpen("template1")}>
              <CardMedia
                component="img"
                height="140"
                image={templateImages.template1}
                alt="Modèle 1"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Modèle 1
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button onClick={() => handleGenerate("template1")} variant="contained" color="primary">
              Générer
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea onClick={() => handleOpen("template2")}>
              <CardMedia
                component="img"
                height="140"
                image={templateImages.template2}
                alt="Modèle 2"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Modèle 2
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button onClick={() => handleGenerate("template2")} variant="contained" color="primary">
              Générer
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea onClick={() => handleOpen("template3")}>
              <CardMedia
                component="img"
                height="140"
                image={templateImages.template3}
                alt="Modèle 3"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Modèle 3
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button onClick={() => handleGenerate("template3")} variant="contained" color="primary">
              Générer
            </Button>
          </Card>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Modèle</DialogTitle>
        <DialogContent>
          {selectedTemplate === "template1" && <CVTemplate1 />}
          {selectedTemplate === "template2" && <CVTemplate2 />}
          {selectedTemplate === "template3" && <CVTemplate3 />}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Modele;
