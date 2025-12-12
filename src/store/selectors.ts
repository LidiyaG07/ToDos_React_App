import { RootState } from '.';

export const selectFilteredTask = (state: RootState) => {
  const { todos, searchQuery, filters } = state.todos;

  return todos.filter((task) => {
    const nameSearch = task.name.toLowerCase().includes(searchQuery.toLowerCase());

    const completedSearch = filters.isCompleted === undefined || task.isCompleted === filters.isCompleted;

    const importantSearch = filters.isImportant === undefined || task.isImportant === filters.isImportant;

    return nameSearch && completedSearch && importantSearch;
  });
};
export const selectSearchQuery = (state: RootState) => state.todos.searchQuery;

export const selectTaskById = (state: RootState, taskId: number) =>
  state.todos.todos.find((task) => task.id === taskId);
