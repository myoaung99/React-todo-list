import React from "react";
import Button from "./Button";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes["input-container"]}>
      <input className={classes.input} type={props.type || "text"}></input>
      <Button style={{ backgroundColor: "purple", color: "white" }}>+</Button>
    </div>
  );
};

export default Input;
