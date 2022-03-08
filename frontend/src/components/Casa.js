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

function Casa() {
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
            <Grid item xs="auto" lg={1} sx={{ minHeight: "12vh" }}>
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
              xs="auto"
              lg={1}
              sx={{ minHeight: "50vh", backgroundColor: "#A8A021" }}
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
                <Grid item xs="auto" lg={16}>
                  <Typography
                    variant="h5"
                    textAlign="center"
                    fontFamily="Averia Serif Libre"
                    color="Black"
                  >
                    Amenities:
                  </Typography>
                </Grid>
                <Grid container spacing={1} columns={16}>
                  <Grid item xs="auto" lg={8}>
                    <Item>xs=8</Item>
                  </Grid>
                  <Grid item xs="auto" lg={7}>
                    <Item>xs=8</Item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs="auto" lg={2} sx={{ minHeight: "30vh" }}>
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

export default Casa;
