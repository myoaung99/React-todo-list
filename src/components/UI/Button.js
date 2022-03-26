import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button style={props.style} className={`${classes.button}`}>
      {props.children}
    </button>
  );
};

export default Button;
