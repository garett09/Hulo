import React, { useEffect, useState } from "react";
import "@fontsource/averia-serif-libre";
import { IconButton, Grid, Typography, Collapse } from "@mui/material";
import "../css/SectionCelso.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { keyframes } from "@mui/system";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

function SectionCelso() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className="background90" id="section-celso">
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="flex-start"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid lg={8}>
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            textAlign="center"
            fontFamily="Averia Serif Libre"
            color="white"
            paddingTop={20}
          >
            Frequently Asked Questions
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="flex-start"
        ></Grid>
        <Grid lg={5}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            textAlign="center"
            fontFamily="Averia Serif Libre"
            color="white"
          >
            How many days will the booking take?
          </Typography>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            textAlign="center"
            fontFamily="Averia Serif Libre"
            color="white"
            paddingBottom={30}
          >
            The date approval will take within 24 hours or a day maximum.
          </Typography>
        </Grid>
        <Grid lg={5}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            textAlign="center"
            fontFamily="Averia Serif Libre"
            color="white"
          >
            What is the mode of payment?
          </Typography>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            textAlign="center"
            fontFamily="Averia Serif Libre"
            color="white"
          >
            Payment can be made thru PayPal.
          </Typography>
        </Grid>
         <Grid lg={5}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            textAlign="center"
            fontFamily="Averia Serif Libre"
            color="white"
          >
            What is the mode of payment?
          </Typography>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            textAlign="center"
            fontFamily="Averia Serif Libre"
            color="white"
          >
            Payment can be made thru PayPal.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default SectionCelso;
