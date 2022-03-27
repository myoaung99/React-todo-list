import React, { useState, useContext } from "react";
import Button from "./Button";
import classes from "./Input.module.css";
import { TodoContext } from "../../store/TodoContext";

const Input = (props) => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const submitHandler = (event) => {
    event.preventDefault();

    // submit only if there are inputs
    if (text.trim().length > 0) {
      const newTodo = {
        id: Math.random(),
        todo: text,
      };

      addTodo(newTodo);
      setText("");
    }
  };

  // update state on input
  const changeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes["input-container"]}>
      <input
        autoFocus="on"
        onChange={changeHandler}
        value={text}
        className={classes.input}
        type={props.type || "text"}
      ></input>
      <button className={classes.button}>+</button>
    </form>
  );
};

export default Input;
