import React, {useEffect} from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "@fontsource/fugaz-one";
import "@fontsource/laila";
import Link from "@mui/material/Link";
import Footer from "./Footer";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function SectionAccomodation() {
  return (
    <Grid
      container
      spacing={1}
      columns={16}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Grid
          container
          spacing={0}
          columns={16}
          direction="row"
          sx={{ width: "100vw" }}
        >
          <Grid item xs={8}>
            <Box
              className="background4"
              sx={{
                display: "flex",
                minwidth: "50vw",
                height: "50vh",
              }}
            >
              <Link href="accomodation/casaaurelia" underline="hover">
              <Typography
                variant="h4"
                textAlign="center"
                position="absolute"
                fontFamily="Averia Serif Libre"
                color="White"
                sx={{ width: "50vw", height: "50vh", paddingTop: "230px" }}
              >
                CASA AURELIA
              </Typography>
              </Link>
              <img
                src={process.env.PUBLIC_URL + "/images/CelsoHall.jpg"}
                alt="test"
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box
              className="background4"
              sx={{
                display: "flex",
                minwidth: "50vw",
                height: "50vh",
              }}
            >
              <Link href="accomodation/casabasyong" underline="hover">
                <Typography
                  variant="h4"
                  textAlign="center"
                  position="absolute"
                  fontFamily="Averia Serif Libre"
                  color="White"
                  href="https://www.w3schools.com/tags/att_href.asp"
                  sx={{ width: "50vw", height: "50vh", paddingTop: "230px" }}
                >
                  KUBO NI BASYONG
                </Typography>
              </Link>
              <img
                src={process.env.PUBLIC_URL + "/images/CelsoHall.jpg"}
                alt="test"
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box
              className="background4"
              sx={{
                display: "flex",
                minwidth: "50vw",
                height: "50vh",
              }}
            >
              <Link href="accomodation/casasalud" underline="hover">
              <Typography
                variant="h4"
                textAlign="center"
                position="absolute"
                fontFamily="Averia Serif Libre"
                color="White"
                sx={{ width: "50vw", height: "50vh", paddingTop: "230px" }}
              >
               CASA SALUD
              </Typography>
              </Link>
              <img
                src={process.env.PUBLIC_URL + "/images/CelsoHall.jpg"}
                alt="test"
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box
              className="background4"
              sx={{
                display: "flex",
                minwidth: "50vw",
                height: "50vh",
              }}
            >
              <Link href="accomodation/casadeprimavera" underline="hover">
              <Typography
                variant="h4"
                textAlign="center"
                position="absolute"
                fontFamily="Averia Serif Libre"
                color="White"
                sx={{ width: "50vw", height: "50vh", paddingTop: "230px" }}
              >
                CAMINOS DE PRIMAVERA
              </Typography>
              </Link>
              <img
                src={process.env.PUBLIC_URL + "/images/CelsoHall.jpg"}
                alt="test"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Grid>
  );
}
export default SectionAccomodation;
