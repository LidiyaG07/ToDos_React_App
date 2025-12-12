import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Checkbox, Button, Tooltip, IconButton, Collapse, Box } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { fetchTasks, removeTask, updateTask } from '../../store/todos/todoSlice';
import { TaskItemsProps } from './TaskItem.types';
import { StyledTaskItem, StyledTaskText, StyledActions, TaskContainer } from './styled';
import { AppDispatch } from 'src/store';
import { Description } from 'components/Description/Description';

export const TaskItem: React.FC<TaskItemsProps> = ({ id, name, info, isCompleted }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [expanded, setExpandet] = useState(false);

  const handleToggleTask = () => {
    dispatch(
      updateTask({
        id,
        name,
        info: info || '',
        isImportant: false,
        isCompleted: !isCompleted,
      })
    );
  };

  const handleDeleteTask = () => {
    dispatch(removeTask(id));
  };

  const toggleDescription = () => {
    setExpandet(!expanded);
  };

  const hasDescription = Boolean(info);

  return (
    <TaskContainer>
      <StyledTaskItem>
        <Checkbox
          checked={isCompleted}
          onChange={handleToggleTask}
          color="primary"
          inputProps={{
            'aria-label': isCompleted ? `Отметить ${name} как невыполненную` : `Отметить ${name} как выполненную`,
          }}
        />

        <Tooltip title={name} arrow placement="top-start">
          <StyledTaskText completed={isCompleted}>{name}</StyledTaskText>
        </Tooltip>

        <IconButton
          onClick={toggleDescription}
          size="small"
          sx={{ marginRight: 1 }}
          aria-label={expanded ? 'Скрыть описание' : 'Показать описание'}>
          {expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </IconButton>

        <StyledActions>
          <Button component={Link} to={`/edit-task/${id}`} variant="outlined" size="small" color="primary">
            Edit
          </Button>

          <Button onClick={handleDeleteTask} variant="outlined" size="small" color="error">
            Delete
          </Button>
        </StyledActions>
      </StyledTaskItem>
      {hasDescription && info && (
        <Collapse in={expanded} timeout="auto">
          <Description info={info} />
        </Collapse>
      )}
    </TaskContainer>
  );
};
