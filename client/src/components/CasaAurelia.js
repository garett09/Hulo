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
      spacing={2}
      columns={16}
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs="auto" lg={8}>
        <Box
          className="background3"
          sx={{
            display: "flex",
            width: "50vw",
            minheight: "90vh",
            padding: "30px",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/CelsoHall.jpg"}
            alt="test"
          />
        </Box>
      </Grid>
      <Grid item xs={8} lg={8}>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <Grid
            container
            spacing={2}
            columns={16}
            direction="column"
            sx={{
              minwidth: "50vw",
              minheight: "100vh",
              paddingTop: "60px",
              paddingLeft: "30px",
            }}
          >
            <Grid item xs="auto" lg={3} sx={{ minHeight: "18vh" }}>
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
                Immerse yourself in nature while experiencing luxurious
                accomodation! Spaciously designed for big groups featuring a
                stunning farm view that will surely make you feel relaxed and
                rejuvenated!
              </Typography>
            </Grid>
            <Grid
              item
              xs="auto"
              lg={1}
              sx={{ minHeight: "54vh", backgroundColor: "#A8A021" }}
            >
              <Grid container spacing={3} columns={16}>
                <Grid item xs="auto" lg={8}>
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
                    <li>Exclusive use of Pool with 15 min Jacuzzi</li>
                    <ul className="a">
                      <li>1 Detached Bathroom</li>
                      <li>1 Airconditioned Common Area</li>
                      <ul>
                        <li>Kitchenette</li>
                        <li>Dining Area</li>
                        <li>Lounge Area</li>
                      </ul>
                    </ul>
                    <li>Outdoor Showers</li>
                    <li>Wide Alfresco Dining Area</li>
                    <li>Wide parking space</li>
                    <li>Dishwashing Set</li>
                  </Typography>
                </Grid>
                <Grid item xs="auto" lg={8}>
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
                    <li>Induction Stove</li>
                    <li>Basic Cooking Ware</li>
                    <li>Rice Cooker</li>
                    <li>Microwave</li>
                    <li>Oven Toaster</li>
                    <li>Refrigerator</li>
                    <li>Water Dispenser</li>
                    <li>Plates</li>
                    <li>Utensils</li>
                  </Typography>
                </Grid>
                <Grid item xs="auto" lg={16}>
                  <Typography
                    variant="h3"
                    textAlign="center"
                    fontFamily="Averia Serif Libre"
                    color="Black"
                  >
                    Add Ons:
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={9} lg={8}>
                      <Typography
                        variant="body2"
                        textAlign="left"
                        fontFamily="Averia Serif Libre"
                        color="Black"
                      >
                        <li>Room 2000php/room</li>
                        <ul>
                          <ul>
                            <li>3 Airconditioned Bedroom</li>
                            <ul>
                              <li>Master's Bedroom (1 King Size Bed)</li>
                              <li>Bedroom 2 (2 Double Bed))</li>
                              <li>Bedroom 3 (2 Double Bed)</li>
                            </ul>
                          </ul>
                        </ul>
                      </Typography>
                    </Grid>
                    <Grid item xs="auto" lg={8}>
                      <Typography
                        variant="body2"
                        textAlign="left"
                        fontFamily="Averia Serif Libre"
                        color="Black"
                      >
                        <li>3 Bathroom</li>
                        <ul>
                          <li>
                            (1 per room w/ hot & cold shower) - <br></br>Extra
                            Bed: P150/P300
                          </li>
                        </ul>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={9} lg={12}>
                    <Typography
                      variant="h5"
                      textAlign="left"
                      fontFamily="Averia Serif Libre"
                      color="Black"
                    >
                      STRICTLY FOR BOOKING AND RESERVATION ONLY!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs="auto" lg={1} sx={{ minHeight: "18vh" }}>
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Averia Serif Libre"
                color="Black"
              >
                Daytour Soft Opening Rate:
              </Typography>

              <Typography
                variant="h3"
                textAlign="left"
                fontFamily="Fugaz One"
                color="Black"
              >
                P15,000
              </Typography>
              <Typography
                variant="h5"
                textAlign="Left"
                fontFamily="Averia Serif Libre"
                color="Black"
              >
                Timeslot: 8am-5pm
                <br></br>(Good for 15-30 pax)
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CasaAurelia;
