import React, { useContext } from "react";
import Button from "../components/UI/Button";
import { TodoContext } from "../store/TodoContext";

const TodoLists = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext);

  const deleteHandler = () => {
    removeTodo(todo.id);
  };
  return (
    <div className={"li-container"}>
      <li>{todo.todo}</li>
      <Button onClick={deleteHandler}>x</Button>
    </div>
  );
};

export default TodoLists;
