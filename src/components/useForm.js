import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(initialFValues) {
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
}

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
    typo: {
      flexGrow: 1,
      textAlign: "center"
    }
  },
}));

export function Form(props) {
    const classes = useStyle();
  return <form className={classes.root} autoComplete="off">{props.children}</form>;
}
