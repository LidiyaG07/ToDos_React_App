
export interface TaskItemsProps {
  id: number,
  name: string,
  info?: string,
  isImportant: boolean,
  isCompleted: boolean
}

export interface StyledTaskItemProps {
  $hasDescription?: boolean;
  $expanded?: boolean;
}
