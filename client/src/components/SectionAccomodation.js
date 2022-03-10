import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "@fontsource/fugaz-one";
import "@fontsource/laila";

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
              <Typography
                variant="h4"
                textAlign="center"
                position="absolute"
                fontFamily="Averia Serif Libre"
                color="White"
                sx={{ width: "50vw", height: "50vh", paddingTop: "230px" }}
              >
                Description of Villas Here
              </Typography>
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
              <Typography
                variant="h4"
                textAlign="center"
                position="absolute"
                fontFamily="Averia Serif Libre"
                color="White"
                sx={{ width: "50vw", height: "50vh", paddingTop: "230px" }}
              >
                Description of Villas Here
              </Typography>
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
              <Typography
                variant="h4"
                textAlign="center"
                position="absolute"
                fontFamily="Averia Serif Libre"
                color="White"
                sx={{ width: "50vw", height: "50vh", paddingTop: "230px" }}
              >
                Description of Villas Here
              </Typography>
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
              <Typography
                variant="h4"
                textAlign="center"
                position="absolute"
                fontFamily="Averia Serif Libre"
                color="White"
                sx={{ width: "50vw", height: "50vh", paddingTop: "230px" }}
              >
                Description of Villas Here
              </Typography>
              <img
                src={process.env.PUBLIC_URL + "/images/CelsoHall.jpg"}
                alt="test"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
export default SectionAccomodation;
