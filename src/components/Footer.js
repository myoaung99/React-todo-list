import React from "react";
import Button from "./UI/Button";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
      <p>You have pending tasks</p>
      <Button>Clear All</Button>
    </div>
  );
};

export default Footer;
