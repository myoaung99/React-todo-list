import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo list",
  initialState: {
    todos: [],
    changed: false,
    isLoading: null,
  },
  reducers: {
    add(state, action) {
      state.changed = true;
      state.todos.push(action.payload);
    },
    delete(state, action) {
      state.changed = true;
      state.todos = state.todos.filter((todos) => todos.id !== action.payload);
    },
    clear(state) {
      state.changed = true;
      state.todos = [];
    },
    replace(state, action) {
      state.todos = action.payload;
    },
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
