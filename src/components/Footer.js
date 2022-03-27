import React, { useContext } from "react";
import Button from "./UI/Button";
import classes from "./Footer.module.css";
import { TodoContext } from "../store/TodoContext";

const Footer = () => {
  const { todos, clearTodo } = useContext(TodoContext);

  const lengthOfList = todos.length;

  const clearHandler = () => {
    clearTodo();
  };
  return (
    <div className={classes["footer-container"]}>
      <p>You have {lengthOfList} pending tasks</p>
      <Button onClick={clearHandler}>Clear All</Button>
    </div>
  );
};

export default Footer;
