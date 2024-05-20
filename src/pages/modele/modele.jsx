import React, { useState, useEffect } from "react";
import { Typography, Grid, Container, Card, CardContent, CardMedia, CardActionArea, Button, Dialog, DialogContent, DialogTitle, DialogActions } from "@mui/material";
import CVTemplate1 from "./templates/template1";
import CVTemplate2 from "./templates/template2";
import CVTemplate3 from "./templates/template3";
import CVTemplate4 from "./templates/template4";
import CVTemplate5 from "./templates/template5";
import CVTemplate6 from "./templates/template6";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Placeholder images for the templates
const templateImages = {
  template1: "/images/1.png",
  template2: "/images/2.png",
  template3: "/images/3.png",
  template4: "/images/4.png", // You can add actual images for templates 4, 5, and 6
  template5: "/images/5.png",
  template6: "/images/6.png",
};

const Modele = ({ selectedCV }) => {
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

  useEffect(() => {
    if (selectedCV) {
      // Logique pour utiliser les données de selectedCV si nécessaire
      console.log('Données du CV reçu:', selectedCV);
    }
  }, [selectedCV]);

  const handleGeneratePDF = () => {
    const input = document.getElementById('template-to-print');
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("cv.pdf");
    });
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Page des Modèles
      </Typography>
      <Typography variant="body1" gutterBottom>
        Bienvenue sur la page des Modèles de votre application. Choisissez un modèle pour générer votre CV.
      </Typography>

      <Grid container spacing={4} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3 }}>
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3 }}>
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3 }}>
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardActionArea onClick={() => handleOpen("template4")}>
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
          <Card sx={{ boxShadow: 3 }}>
            <CardActionArea onClick={() => handleOpen("template5")}>
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
          <Card sx={{ boxShadow: 3 }}>
            <CardActionArea onClick={() => handleOpen("template6")}>
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

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Modèle</DialogTitle>
        <DialogContent>
          <div id="template-to-print">
            {selectedTemplate === "template1" && <CVTemplate1 cvData={selectedCV[0]} />}
            {selectedTemplate === "template2" && <CVTemplate2 cvData={selectedCV[0]} />}
            {selectedTemplate === "template3" && <CVTemplate3 cvData={selectedCV[0]} />}
            {selectedTemplate === "template4" && <CVTemplate4 cvData={selectedCV[0]} />}
            {selectedTemplate === "template5" && <CVTemplate5 cvData={selectedCV[0]} />}
            {selectedTemplate === "template6" && <CVTemplate6 cvData={selectedCV[0]} />}
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleGeneratePDF}>
            Générer
          </Button>
          <Button onClick={handleClose} color="primary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Modele;
