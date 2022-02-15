import React, { useEffect, useState } from "react";
import "@fontsource/averia-serif-libre";
import { IconButton, Grid, Typography, Collapse } from "@mui/material";
import "../css/SectionMain.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { keyframes } from "@mui/system";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

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

function SectionMain() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className="background1">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item sm={6}>
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
              Welcome to Hulo Farm
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
      <Grid container rowSpacing={25} position="absolute">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs="auto" md="3">
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 55,
                  bgcolor: "white",
                  ml: 30,
                  boxShadow: 0,
                }}
                className="icons"
              >
                <nav aria-label="main mailbox folders">
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InstagramIcon />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <FacebookIcon />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <MailOutlineIcon />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Box>
            </Grid>
            <Grid item xs={6} md="5"></Grid>
            <Grid item xs>
              <Button variant="contained">Book Now</Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}
export default SectionMain;
