import { TaskFormData } from 'utils/validationSchemas';

export interface TaskFormProps {
  initialData?: {
    name?: string;
    info?: string;
    isImportant?: boolean;
    isCompleted?: boolean;
  };
  onSubmit: (data: TaskFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}
