import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTasks, createTask, updateTask, removeTask } from './todosThunk';
import { TodosState } from './types';

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
  searchQuery: '',
  filters: {},
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<TodosState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilter: (state) => {
      state.filters = {};
      state.searchQuery = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.todos.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter((task) => task.id !== action.payload);
      });

    builder.addMatcher(
      (action): action is ReturnType<typeof fetchTasks.pending> => action.type.endsWith('/pending'),
      (state) => {
        state.loading = true;
        state.error = null;
      }
    );

    builder.addMatcher(
      (action): action is ReturnType<typeof fetchTasks.rejected> => action.type.endsWith('/rejected'),
      (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        }
      }
    );
  },
});

export default todoSlice.reducer;
export const { setSearchQuery, setFilters, clearFilter } = todoSlice.actions;
export { fetchTasks, createTask, updateTask, removeTask };
