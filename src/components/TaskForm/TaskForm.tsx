import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Checkbox, FormControlLabel, CircularProgress } from '@mui/material';
import { TaskFormProps } from './TaskForm.types';
import { ActionsContainer, StyledButton, StyledForm } from './styled';
import { TaskFormData, taskSchema } from 'utils/validationSchemas';

export const TaskForm: React.FC<TaskFormProps> = ({ initialData = {}, onSubmit, onCancel, isLoading = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TaskFormData>({
    resolver: yupResolver(taskSchema),
    defaultValues: {
      name: initialData.name || '',
      info: initialData.info || '',
      isImportant: initialData.isImportant || false,
      isCompleted: initialData.isCompleted || false,
    },
    mode: 'onChange',
  });

  return (
    <StyledForm component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Task name"
        variant="outlined"
        fullWidth
        {...register('name')}
        error={!!errors.name}
        helperText={errors.name?.message}
        disabled={isLoading}
        size="small"
      />

      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        {...register('info')}
        error={!!errors.info}
        helperText={errors.info?.message}
        disabled={isLoading}
      />

      <FormControlLabel
        control={<Checkbox {...register('isImportant')} disabled={isLoading} color="primary" />}
        label="An important task"
      />

      <ActionsContainer>
        <StyledButton type="button" onClick={onCancel} disabled={isLoading} variant="outlined" color="secondary">
          Cancel
        </StyledButton>
        <StyledButton
          type="submit"
          disabled={isLoading || !isValid}
          variant="contained"
          color="primary"
          startIcon={isLoading ? <CircularProgress size={16} /> : null}>
          {isLoading ? 'Saving...' : 'Save'}
        </StyledButton>
      </ActionsContainer>
    </StyledForm>
  );
};
