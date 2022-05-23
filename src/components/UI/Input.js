import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";

const Input = () => {
  // controlled form
  const inputTextRef = useRef("");

  // func from ctx
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    const text = inputTextRef.current.value;
    // submit only if there are inputs
    if (text.trim().length > 0) {
      const newTodo = {
        id: Math.random(),
        todo: text,
      };

      dispatch(todoActions.add(newTodo));

      inputTextRef.current.value = "";
    }
  };

  const changeHandler = () => {
    console.log(inputTextRef.current.value);
  };

  return (
    <form onSubmit={submitHandler} className={"input-container"}>
      <input
        autoFocus="on"
        onChange={changeHandler}
        ref={inputTextRef}
        className={"input"}
        type={"text"}
      ></input>
      <button className={"button"}>+</button>
    </form>
  );
};

export default Input;
