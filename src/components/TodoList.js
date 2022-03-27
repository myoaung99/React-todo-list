import React, { useContext } from "react";
import TodoLists from "./TodoLists";
import classes from "./TodoList.module.css";
import { TodoContext } from "../store/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  // loop the list from TodoContext
  const todoLists = todos.map((todo) => (
    <TodoLists key={todo.id} todo={todo} />
  ));

  return <ul className={classes.ul}>{todoLists}</ul>;
};

export default TodoList;
