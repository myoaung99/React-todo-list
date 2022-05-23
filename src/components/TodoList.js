import React from "react";
import TodoLists from "./TodoLists";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.isLoading);

  let todoLists;

  if (!loading && todos && todos.length > 0) {
    todoLists = todos.map((todo) => <TodoLists key={todo.id} todo={todo} />);
  } else if (!loading) {
    todoLists = <p>No tasks</p>;
  }

  // loop the list from TodoContext

  return (
    <>
      <div>{loading && <p>Loading....</p>}</div>
      <ul className={"ul"}>{todoLists}</ul>
    </>
  );
};

export default TodoList;
