import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from 'components/PageContainer';
import { TaskFormData } from 'utils/validationSchemas';
import { AppDispatch } from 'src/store';
import { createTask } from 'src/store/todos/todoSlice';
import { Task } from 'src/store/todos/types';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { Title } from 'components/Title/Title';

export const AddTaskPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (taskData: TaskFormData) => {
    setIsLoading(true);
    try {
      const taskToCreate: Omit<Task, 'id'> = {
        name: taskData.name,
        info: taskData.info || '',
        isImportant: taskData.isImportant || false,
        isCompleted: taskData.isCompleted || false,
      };

      await dispatch(createTask(taskToCreate)).unwrap();
      navigate('/tasks');
    } catch (error) {
      console.error('Ошибка при создании задачи:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/tasks');
  };

  return (
    <PageContainer>
      <Title name="Add task" />
      <TaskForm onSubmit={handleSubmit} onCancel={handleCancel} isLoading={isLoading} />
    </PageContainer>
  );
};
