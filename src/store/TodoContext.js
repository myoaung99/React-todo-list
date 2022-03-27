import React, { createContext, useReducer } from "react";

// Initial State
const initialState = {
  todos: [
    { id: 1, todo: "Buy a new laptop" },
    { id: 2, todo: "Complete a previous task" },
    { id: 3, todo: "Create a video for YouTube" },
  ],
};

// Create Context
export const TodoContext = createContext({
  todos: initialState,
  removeTodoList: (id) => {},
});

// Create Reducer
const TodoReducer = (state, action) => {
  switch (action.type) {
    // delete logic
    case "DELETE":
      const updatedTodo = state.todos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todos: updatedTodo,
      };

    // add logic
    case "ADD":
      return {
        ...state,
        todos: [action.newTodo, ...state.todos],
      };

    case "CLEAR":
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

export const TodoProvider = (props) => {
  const [todoState, dispatchTodoState] = useReducer(TodoReducer, initialState);

  const deleteTodoHandler = (id) => {
    dispatchTodoState({
      type: "DELETE",
      id: id,
    });
  };

  const addTodoHandler = (todo) => {
    dispatchTodoState({
      type: "ADD",
      newTodo: todo,
    });
  };

  const clearHandler = () => {
    dispatchTodoState({
      type: "CLEAR",
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: todoState.todos,
        removeTodo: deleteTodoHandler,
        addTodo: addTodoHandler,
        clearTodo: clearHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
