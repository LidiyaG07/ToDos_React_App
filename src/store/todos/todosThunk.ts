import { createAsyncThunk } from '@reduxjs/toolkit';
import { Task, CreateTaskData, ThunkError } from './types';
import { tasksApi } from 'api/tasksApi';

export const fetchTasks = createAsyncThunk<Task[], void, { rejectValue: ThunkError }>('todos/fetchTasks', async (_, { rejectWithValue }) => {
  try {
    const response = await tasksApi.get('/tasks');
    return response.data;
  } catch (error) {
    return rejectWithValue('Не удалось загрузить список дел!');
  }
});

export const createTask = createAsyncThunk<Task, CreateTaskData, { rejectValue: ThunkError }>(
  'todos/createTask',
  async (taskData: CreateTaskData, { rejectWithValue }) => {
    try {
      const response = await tasksApi.post('/tasks', taskData);
      return response.data;
    } catch (error) {
      return rejectWithValue('Не удалось создать задачу!');
    }
  }
);

export const updateTask = createAsyncThunk<Task, Task, { rejectValue: ThunkError }>('todos/updateTask', async (updateTask: Task, { rejectWithValue }) => {
  try {
    const response = await tasksApi.patch(`/tasks/${updateTask.id}`, {
      name: updateTask.name,
      info: updateTask.info,
      isImportant: updateTask.isImportant,
      isCompleted: updateTask.isCompleted,
    });
    return response.data;
  } catch (error) {
    return rejectWithValue('Не удалось обновить задачу');
  }
});

export const removeTask = createAsyncThunk<number, number, { rejectValue: ThunkError }>('todos/removeTask', async (taskId: number, { rejectWithValue }) => {
  try {
    await tasksApi.delete(`/tasks/${taskId}`);
    return taskId;
  } catch (error) {
    return rejectWithValue('Не удалось удалить задачу!');
  }
});
