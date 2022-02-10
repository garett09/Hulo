import React from "react";
//import styled from "styled-components";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import "@fontsource/averia-serif-libre";
import CssBaseline from "@mui/material/CssBaseline";

const useStyles = makeStyles((theme) => ({
  background: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/CelsoHall.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },
}));

function SectionCelso() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <CssBaseline />
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          alignItems="center"
          fontFamily="Averia Serif Libre"
          color= "#CEBCA3"
        >
          Celso Hall
        </Typography>
      </Grid>
    </Grid>
    </div>
  );
}

export default SectionCelso;
