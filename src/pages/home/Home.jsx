import React from "react";
import { Grid } from "@mui/material";

import FeaturedPost from "./FeaturedPost";
import ImporterMission from "./ImporterMission";
import FormulaireProfil from "./Formulaire";

const Home = () => {
  return (
    <Grid container spacing={4}>
      {/* Section de post en vedette prend toute la largeur */}
      <Grid item xs={12}>
        <FeaturedPost />
      </Grid>

      {/* ImporterMission et FormulaireProfil côte à côte, chacun prenant la moitié de l'espace */}
      <Grid item xs={12} container spacing={4} justifyContent="space-between">
        {/* ImporterMission à gauche */}
        <Grid item xs={12} md={6}>
          <ImporterMission />
        </Grid>

        {/* FormulaireProfil à droite, aligné au haut du composant comme FeaturedPost */}
        <Grid item xs={12} md={6}>
          <FormulaireProfil />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
