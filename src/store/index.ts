import { configureStore } from '@reduxjs/toolkit';
import ToDoReduser from './todos/todoSlice';
import ThemeReduser from './themeSlice';

export const store = configureStore({
  reducer: {
    todos: ToDoReduser,
    theme: ThemeReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
