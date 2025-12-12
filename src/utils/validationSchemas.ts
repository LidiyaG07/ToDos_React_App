import * as yup from 'yup';

export const taskSchema = yup.object({
  name: yup
    .string()
    .required('Task name is required')
    .min(3, 'Minimum 3 characters')
    .max(100, 'Maximum 100 characters'),
  info: yup.string().default('').max(500, 'Maximum 500 characters'),
  isImportant: yup.boolean().default(false),
  isCompleted: yup.boolean().default(false),
});

export type TaskFormData = yup.InferType<typeof taskSchema>;
