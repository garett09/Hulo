import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import CustomerForm from "../pages/CustomerForm";
import "../css/SectionCelso.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}));

function Customers() {

  const classes =  useStyles();

  return (
    <div className="kobe" id="section-celso">
      <Grid container spacing={0} style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ bgcolor: "red" }}>
            <Paper className={classes.pageContent}>
              <CustomerForm />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ bgcolor: "green" }}>tite</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Customers;
