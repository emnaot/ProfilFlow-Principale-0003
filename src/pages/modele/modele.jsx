import React, { useState } from "react";
import { Typography, Grid, Container, Card, CardContent, CardMedia, CardActionArea, Dialog, DialogContent, DialogTitle } from "@mui/material";
import CVTemplate1 from "./templates/template1";
import CVTemplate2 from "./templates/template2";
import CVTemplate3 from "./templates/template3";

// Placeholder images for the templates
const templateImages = {
  template1: "path/to/template1-image.jpg",
  template2: "path/to/template2-image.jpg",
  template3: "path/to/template3-image.jpg",
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

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" gutterBottom>
        Page des Modèles
      </Typography>
      <Typography variant="body1">
        Bienvenue sur la page des Modèles de votre applicationnn.
      </Typography>

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card onClick={() => handleOpen("template1")}>
            <CardActionArea>
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card onClick={() => handleOpen("template2")}>
            <CardActionArea>
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
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card onClick={() => handleOpen("template3")}>
            <CardActionArea>
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
