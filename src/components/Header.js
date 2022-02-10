import React from "react";
import { makeStyles } from "@material-ui/styles";
import SortIcon from "@mui/icons-material/Sort";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: "80px",
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    transform: "scale(1.8)",
  },
  appbar:{
    backgroundColor: "#ae9376",
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className ={classes.appbar} elevation={0}>
        <Toolbar>
          <IconButton>
            <img
              src={process.env.PUBLIC_URL + "/images/Hulofarmlogo.png"}
              alt="Hulo Logo"
              className={classes.logo}
            />
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
