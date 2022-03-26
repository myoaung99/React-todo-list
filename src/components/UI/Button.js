import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const clickHandler = (event) => {
    props.onClick();
  };
  return (
    <button
      onClick={clickHandler}
      style={props.style}
      className={`${classes.button}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
