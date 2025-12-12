import { useSelector } from 'react-redux';
import { DesktopOnlyColumn, MobileOnlyColumn, StyledTodoList, TaskColumn } from './styled';
import { TaskItem } from 'components/TaskItem/TaskItem';
import { selectFilteredTask } from 'src/store/selectors';

export const TodoList: React.FC = () => {
  const filteredTasks = useSelector(selectFilteredTask);
  const middleIndex = Math.ceil(filteredTasks.length / 2);
  const firstColumnTasks = filteredTasks.slice(0, middleIndex);
  const secondColumnTasks = filteredTasks.slice(middleIndex);

  return (
    <StyledTodoList>
      <TaskColumn>
        {firstColumnTasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </TaskColumn>

      <DesktopOnlyColumn>
        {secondColumnTasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </DesktopOnlyColumn>

      <MobileOnlyColumn>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </MobileOnlyColumn>
    </StyledTodoList>
  );
};
