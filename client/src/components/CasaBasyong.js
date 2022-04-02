import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import "@fontsource/averia-serif-libre";
import "../css/CasaAurelia.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "@fontsource/fugaz-one";
import "@fontsource/laila";
import Header from "./Header";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CasaBasyong() {
  return (
    <div>
      <Header />
   
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
                KUBO NI BASYONG
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                fontFamily="Averia Serif Libre"
                color="Black"
              >
                Experience comfortable farm camping in an A-frame design kubo
                ideal for small groups looking for a budgeted quick getaway!
              </Typography>
            </Grid>
            <Grid
              item
              xs="auto"
              lg={1}
              sx={{ minHeight: "31vh", backgroundColor: "#A8A021" }}
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
                    <li>Airconditioned Room</li>
                    <li>Balcony with Farm View </li>
                    <li>Sofa Bed</li>
                    <li>Tables and Chairs</li>
                  </Typography>
                </Grid>
                <Grid item xs="auto" lg={8}>
                  <Typography
                    variant="h3"
                    textAlign="left"
                    fontFamily="Averia Serif Libre"
                    color="Black"
                  >
                    Guess Access:
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="left"
                    fontFamily="Averia Serif Libre"
                    color="Black"
                  >
                    <li>
                      Kitchen Area with Basic Cooking Ware (Electric Stove,
                      <br></br>Pans, Rice Cooker)
                    </li>
                    <li>Common Bathrom</li>
                    <li>Wide Parking Area</li>
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
                    <Grid item xs={9} lg={20}>
                      <Typography
                        variant="body1"
                        textAlign="Center"
                        fontFamily="Averia Serif Libre"
                        color="Black"
                      >
                        <li>Table Set-up: P500</li>
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
                P2,700
              </Typography>
              <Typography
                variant="h5"
                textAlign="Left"
                fontFamily="Averia Serif Libre"
                color="Black"
              >
                Timeslot: 8am-5pm
                <br></br>(Good for 2-4 pax)
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid> 
    </div>
  );
}

export default CasaBasyong;
