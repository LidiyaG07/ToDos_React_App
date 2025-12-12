import { ToDo } from "src/App"

export interface TodoListProps {
  tasks: ToDo[],
  handleTask: (id: number) => void,
  deleteTask: (id: number) => void
}
