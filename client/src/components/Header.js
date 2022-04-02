import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "../css/Header.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Links from "@mui/material/Link";
import { Link } from 'react-router-dom';
import "@fontsource/averia-serif-libre";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutus"},
  { name: "Accomodation", href: "/accomodation" },
  { name: "Event Hall", href: "/celsohall" },
  { name: "Resort Rules", href: "" },
  { name: "FAQs", href: "" },
];

function Header() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "transparent", boxShadow: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, transform: "scale(1.8)" }}
          >
            <MenuIcon onClick={() => setOpen(true)} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src={process.env.PUBLIC_URL + "/images/Hulofarmlogo.png"}
              alt="Hulo Logo"
              className="logo"
            />
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ transform: "scale(1.8)" }}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
               <MenuItem onClick={handleClose}>Sign In</MenuItem>
               <MenuItem onClick={handleClose}>Creat An Account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div
            onClick={() => setOpen(false)}
            onKeyPress={() => setOpen(false)}
            role="button"
            tabIndex={0}
          >
            <IconButton>
              <ChevronLeftIcon onClick={() => setOpen(false)} />
            </IconButton>
          </div>
          <Divider />
          <List>
            {navigationLinks.map((item) => (
              <ListItem key={item.name}>
                <Links
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  fontFamily="Averia Serif Libre"
                  href={item.href}
                  sx={{ marginRight: 10, color: "#B6926C", fontSize: "1.2rem" }}
                >
                  {item.name}
                </Links>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </AppBar>
    </Box>
  );
}
export default Header;
