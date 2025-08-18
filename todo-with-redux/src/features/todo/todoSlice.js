import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        todoMsg: action.payload,
      };

      state.todos.push(newTodo);
    },
    updateTodo: (state, action) => {
      const updateTodo = {
        id: action.payload.id,
        todoMsg: action.payload.newMsg,
      };
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? updateTodo : todo
      );
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
