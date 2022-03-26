import React from "react";
import TodoLists from "./TodoLists";
import classes from "./TodoList.module.css";

const DUMMY_TODO = [
  { id: 1, todo: "Buy a new laptop" },
  { id: 2, todo: "Complete a previous task" },
  { id: 3, todo: "Create a video for YouTube" },
];

const TodoList = () => {
  const todoLists = DUMMY_TODO.map((todo) => <TodoLists todo={todo} />);
  return <ul className={classes.ul}>{todoLists}</ul>;
};

export default TodoList;
