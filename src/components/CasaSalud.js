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

function CasaSalud() {
  return (
    <Grid
      container
      spacing={2}
      columns={16}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Box
        className="background4"
        sx={{
          display: "flex",
          width: "95vw",
          height: "50vh",
          paddingTop: "10px",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/CelsoHall.jpg"}
          alt="test"
        />
      </Box>

      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Grid
          container
          spacing={2}
          columns={16}
          direction="column"
          sx={{ width: "90vw", paddingTop: "10px" }}
        >
          <Grid item xs={1}>
            <Box sx={{ flexGrow: 1, paddingTop: "15px" }}>
              <Grid container spacing={2} columns={16}>
                <Grid item xs={11}>
                  <Typography
                    variant="h5"
                    textAlign="left"
                    fontFamily="Averia Serif Libre"
                    color="Black"
                  >
                    Description of Villas Here
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="h3"
                    textAlign="left"
                    fontFamily="Laila"
                    color="Black"
                    fontWeight="1000"
                  >
                    CASA AURELIA
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={8}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} columns={16}>
                <Grid
                  item
                  xs={11}
                  sx={{ minHeight: "30vh", backgroundColor: "#A8A021" }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3} columns={16}>
                      <Grid item xs="auto"lg= {5}>
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

                  </Typography>
                      </Grid>
                      <Grid item xs={8} lg={5}>
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
                      <Grid item xs="auto" lg={5}>
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
                  </Box>
                  
                </Grid>
                <Grid item xs={5}>
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default CasaSalud;
