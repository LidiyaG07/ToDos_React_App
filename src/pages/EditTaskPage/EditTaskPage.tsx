import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PageContainer } from 'components/PageContainer';
import { AppDispatch, RootState } from 'src/store';
import { selectTaskById } from 'src/store/selectors';
import { fetchTasks, updateTask } from 'src/store/todos/todoSlice';
import { Task } from 'src/store/todos/types';
import { TaskFormData } from 'utils/validationSchemas';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { Title } from 'components/Title/Title';

export const EditTaskPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const taskId = Number(id);

  const task = useSelector((state: RootState) => selectTaskById(state, taskId));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!task) {
      dispatch(fetchTasks());
    }
  }, [task, dispatch]);

  const handleSubmit = async (taskData: TaskFormData) => {
    if (!task) return;

    setIsLoading(true);

    try {
      const updateTaskData: Task = {
        id: task.id,
        name: taskData.name,
        info: taskData.info || '',
        isImportant: taskData.isImportant ?? false,
        isCompleted: taskData.isCompleted ?? false,
      };
      await dispatch(updateTask(updateTaskData)).unwrap();
      navigate('/tasks');
    } catch (error) {
      console.error('Ошибка при обновлении задачи:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/tasks');
  };

  if (!task) {
    return (
      <PageContainer>
        <Title name="Edit a task" />
        <p>Loading...</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Title name={`Edit a task #${id}`} />
      <TaskForm initialData={task} onSubmit={handleSubmit} onCancel={handleCancel} isLoading={isLoading} />
    </PageContainer>
  );
};
