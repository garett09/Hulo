import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import "@fontsource/averia-serif-libre";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Footer() {
  return (
    <Grid container rowSpacing={1}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16} rowSpacing ={1} backgroundColor="#AE9376">
          <Grid item xs={8}>
            <Typography
              variant="p"
              component="div"
              gutterBottom
              alignItems="center"
              fontFamily="Averia Serif Libre"
              color="#FFF"
            >
              The Hulo Agri & Leisure Farm remains to be a COVID-free safe
              place. All staff are fully vaccinated.
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="p"
              component="div"
              gutterBottom
              alignItems="center"
              fontFamily="Averia Serif Libre"
              color="#FFF"
            >
              2020 Hulo Farm, All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Footer;
