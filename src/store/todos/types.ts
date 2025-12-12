export interface Task {
  id: number;
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export interface TodosState {
  todos: Task[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  filters: {
    isCompleted?: boolean;
    isImportant?: boolean;
  };
}

export type ThunkError = string;

export type CreateTaskData = Omit<Task, 'id'>;
export type UpdateTaskData = Partial<Task> & { id: number };
