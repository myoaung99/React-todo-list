import React, { useState, useContext } from "react";
import { TodoContext } from "../../store/TodoContext";

const Input = (props) => {
  // controlled form
  const [text, setText] = useState("");

  // func from ctx
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
    <form onSubmit={submitHandler} className={"input-container"}>
      <input
        autoFocus="on"
        onChange={changeHandler}
        value={text}
        className={"input"}
        type={props.type || "text"}
      ></input>
      <button className={"button"}>+</button>
    </form>
  );
};

export default Input;
