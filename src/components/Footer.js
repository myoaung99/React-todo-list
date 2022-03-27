import React, { useContext } from "react";
import Button from "./UI/Button";
import { TodoContext } from "../store/TodoContext";

const Footer = () => {
  const { todos, clearTodo } = useContext(TodoContext);

  const lengthOfList = todos.length;

  const clearHandler = () => {
    clearTodo();
  };
  return (
    <div className={"footer-container"}>
      <p>You have {lengthOfList} pending tasks</p>
      {lengthOfList > 0 && (
        <Button style={{ fontSize: "1.3rem" }} onClick={clearHandler}>
          Clear All
        </Button>
      )}
    </div>
  );
};

export default Footer;
