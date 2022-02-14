import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import "@fontsource/averia-serif-libre";
import "../css/SectionAboutUs.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CasaAurelia() {
  return (
    <div className="background3">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid container spacing={2} columns={16}>
          <Grid item xs={7} sx={{ minHeight: "100vh" }}>
            <div className="CasaAurelia">
              <img src="../../public/images/CelsoHall.jpg" alt="test" />
            </div>
          </Grid>
          <Grid item xs={7}>
            <Grid
              container
              spacing={2}
              direction="column"
              sx={{ paddingTop: "100px" }}
            >
              <Grid item xs={15} sx={{ minHeight: "10vh" }}>
                <Typography
                  variant="h4"
                  textAlign="left"
                  fontFamily="Averia Serif Libre"
                  color="Black"
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
                xs={12}
                sx={{ minHeight: "60vh", backgroundColor: "#A8A021" }}
              >
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
                      variant="h5"
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
                    variant="h5"
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
                <Typography
                  variant="h5"
                  textAlign="left"
                  fontFamily="Averia Serif Libre"
                  color="Black"
                >
                  P15,000
                </Typography>
                <Typography
                  variant="h5"
                  textAlign="left"
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
    </div>
  );
}

export default CasaAurelia;
