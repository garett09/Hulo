import React, { useEffect, useState } from "react";
import "@fontsource/averia-serif-libre";
import { IconButton, Grid, Typography, Collapse } from "@mui/material";
import "../css/SectionAboutUs.css";
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

function SectionAboutUs() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className="background2" id="section-about-us">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Collapse
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={50}
          >
            <Typography
              variant="h1"
              component="div"
              gutterBottom
              alignItems="center"
              fontFamily="Averia Serif Libre"
              color="#CEBCA3"
            >
              About Us
            </Typography>
            <IconButton>
              <ExpandMoreIcon
                sx={{
                  animation: `${bounce} 2s infinite ease`,
                  color: "black",
                  fontSize: "3rem",
                }}
              />
            </IconButton>
          </Collapse>
        </Grid>
      </Grid>
    </div>
  );
}
export default SectionAboutUs;
