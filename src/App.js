import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Card from "./components/UI/Card";
import Input from "./components/UI/Input";
import Footer from "./components/Footer";

import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList, postTodoList } from "./store/todo-actions";
import { todoActions } from "./store/todo-slice";

function App() {
  const todos = useSelector((state) => state.todos);
  const changed = useSelector((state) => state.changed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoList());
  }, []);

  useEffect(() => {
    if (changed) {
      dispatch(postTodoList(todos));
    }
  }, [dispatch, todos, changed]);

  return (
    <Card>
      <Header />
      <Input />
      <TodoList />
      <Footer />
    </Card>
  );
}

export default App;
