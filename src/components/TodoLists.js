import React from "react";
import classes from "./TodoLists.module.css";
import Button from "../components/UI/Button";

const TodoLists = (props) => {
  const clickHandler = (event) => {
    console.log(props.todo.id);
  };
  return (
    <div className={classes["li-container"]}>
      <li>{props.todo.todo}</li>
      <Button
        onClick={clickHandler}
        style={{ backgroundColor: "red", color: "white" }}
      >
        x
      </Button>
    </div>
  );
};

export default TodoLists;
