import React from "react";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import { todoActions } from "./../store/todo-slice";

import { FcTodoList } from "react-icons/fc";

const TodoLists = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(todoActions.delete(todo.id));
  };
  return (
    <div className={"li-container"}>
      <li>
        <FcTodoList size={30} color="purple" /> <p>{todo.todo}</p>
      </li>
      <Button onClick={deleteHandler}>x</Button>
    </div>
  );
};

export default TodoLists;
