import React, { useContext } from "react";
import Button from "./UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../store/todo-slice";

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const lengthOfList = todos.length;

  const clearHandler = () => {
    dispatch(todoActions.clear());
  };
  return (
    <div className={"footer-container"}>
      <footer>
        <p>
          You have <span>{lengthOfList}</span> pending tasks
        </p>
        {lengthOfList > 0 && (
          <Button className="footer__btn" onClick={clearHandler}>
            Clear All
          </Button>
        )}
      </footer>
    </div>
  );
};

export default Footer;
