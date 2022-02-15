import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import "@fontsource/averia-serif-libre";
import "../css/CasaAurelia.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "@fontsource/fugaz-one";
import "@fontsource/laila";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CasaAurelia() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid container spacing={2} columns={16}>
        <Grid item sm={7} sx={{ minHeight: "100vh", minWidth: "96.6vh" }}>
          <img
            src={process.env.PUBLIC_URL + "/images/CelsoHall.jpg"}
            alt="test"
            className="background3"
          />
        </Grid>
        <Grid item xs={7}>
          <Grid
            container
            spacing={2}
            direction="column"
            sx={{ paddingTop: "50px" }}
          >
            <Grid item xs={15} sx={{ minHeight: "10vh" }}>
              <Typography
                variant="h3"
                textAlign="left"
                fontFamily="Laila"
                color="Black"
                fontWeight="1000"
              >
                CASA AURELIA
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Averia Serif Libre"
                color="Black"
              >
                Description of Villas Here
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              sx={{ minHeight: "60vh", backgroundColor: "#A8A021" }}
            >
              <Grid container spacing={30}>
                <Grid item xs="auto">
                  <Typography
                    variant="h3"
                    textAlign="left"
                    fontFamily="Averia Serif Libre"
                    color="Black"
                  >
                    Inclusion:
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="left"
                    fontFamily="Averia Serif Libre"
                    color="Black"
                  >
                    Exclusive use of Pool <br></br>with 15 min Jacuzzi
                    <br></br> 1 Detached Bathroom
                    <br></br> 1 Airconditioned Common <br></br>Area
                    <br></br>Kitchenette
                    <br></br>Dining Area
                    <br></br>Lounge Area
                    <br></br>Outdoor Showers
                    <br></br>Wide Alfresco
                    <br></br>Dining Area
                    <br></br>Wide parking space
                    <br></br>Dishwashing Set
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography
                    variant="h3"
                    textAlign="left"
                    fontFamily="Averia Serif Libre"
                    color="Black"
                  >
                    Amenities:
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="left"
                    fontFamily="Averia Serif Libre"
                    color="Black"
                  >
                    <br></br>Stove Basic
                    <br></br>Cooking Ware
                    <br></br>Rice Cooker
                    <br></br>Microwave
                    <br></br>Oven Toaster
                    <br></br>Refrigerator
                    <br></br>Water
                    <br></br>Dispenser
                    <br></br>Plates Utensils
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={15}>
                <Typography
                  variant="h3"
                  textAlign="center"
                  fontFamily="Averia Serif Libre"
                  color="Black"
                >
                  Add ons:
                </Typography>
                <Grid container spacing={30}>
                  <Grid item xs="auto">
                    <Typography
                      variant="h5"
                      textAlign="left"
                      fontFamily="Averia Serif Libre"
                      color="Black"
                    >
                      Inclusion:
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="h5"
                      textAlign="left"
                      fontFamily="Averia Serif Libre"
                      color="Black"
                    >
                      Amenities:
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={15} sx={{ minHeight: "20vh" }}>
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Averia Serif Libre"
                color="Black"
              >
                Daytour Soft Opening Rate:
              </Typography>
              <Grid item xs={7}>
                <Typography
                  variant="h3"
                  textAlign="center"
                  fontFamily="Fugaz One"
                  color="Black"
                >
                  P15,000
                </Typography>
                <Typography
                  variant="h5"
                  textAlign="center"
                  fontFamily="Averia Serif Libre"
                  color="Black"
                >
                  Timeslot: 8am-5pm
                  <br></br>(Good for 15-30 pax)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CasaAurelia;
