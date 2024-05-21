import React, { useState } from "react";
import { Typography, Grid, Container, Card, CardContent, CardMedia, CardActionArea, Dialog, DialogContent, DialogTitle } from "@mui/material";
import CVTemplate1 from "./templates/template1";
import CVTemplate2 from "./templates/template2";
import CVTemplate3 from "./templates/template3";

// Placeholder images for the templates
const templateImages = {
  template1: "/images/1.PNG",
  template2: "/images/2.PNG",
  template3: "/images/3.PNG",
  template4: "/images/4.PNG",
  template5: "/images/5.PNG",
  template6: "/images/6.PNG",
};

const Modele = () => {
  const [open, setOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [hoveredTemplate, setHoveredTemplate] = useState(null);

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
          <Card
            onClick={() => handleOpen("template1")}
            onMouseEnter={() => setHoveredTemplate("template1")}
            onMouseLeave={() => setHoveredTemplate(null)}
          >
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
          <Card
            onClick={() => handleOpen("template2")}
            onMouseEnter={() => setHoveredTemplate("template2")}
            onMouseLeave={() => setHoveredTemplate(null)}
          >
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
          <Card
            onClick={() => handleOpen("template3")}
            onMouseEnter={() => setHoveredTemplate("template3")}
            onMouseLeave={() => setHoveredTemplate(null)}
          >
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

        <Grid item xs={12} sm={6} md={4}>
          <Card
            onClick={() => handleOpen("template4")}
            onMouseEnter={() => setHoveredTemplate("template4")}
            onMouseLeave={() => setHoveredTemplate(null)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={templateImages.template4}
                alt="Modèle 4"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Modèle 4
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            onClick={() => handleOpen("template5")}
            onMouseEnter={() => setHoveredTemplate("template5")}
            onMouseLeave={() => setHoveredTemplate(null)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={templateImages.template5}
                alt="Modèle 5"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Modèle 5
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            onClick={() => handleOpen("template6")}
            onMouseEnter={() => setHoveredTemplate("template6")}
            onMouseLeave={() => setHoveredTemplate(null)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={templateImages.template6}
                alt="Modèle 6"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Modèle 6
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      {hoveredTemplate && (
        <Dialog
          open={Boolean(hoveredTemplate)}
          onClose={() => setHoveredTemplate(null)}
          maxWidth="sm"
          fullWidth
        >
          <DialogContent>
            <img src={templateImages[hoveredTemplate]} alt={`Modèle ${hoveredTemplate}`} width="100%" />
          </DialogContent>
        </Dialog>
      )}

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Modèle</DialogTitle>
        <DialogContent>
          {selectedTemplate && (
            <img src={templateImages[selectedTemplate]} alt={`Modèle ${selectedTemplate}`} width="100%" />
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Modele;
