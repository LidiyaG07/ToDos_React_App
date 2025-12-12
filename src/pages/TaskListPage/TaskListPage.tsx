import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ListSection, NavigationSection, PageLayout } from './styled';
import { PageContainer } from 'components/PageContainer';
import { SearchInputContainer } from 'components/SearchInput/SearchInputContainer';
import { TodoList } from 'components/TodoList/TodoList';
import { AppDispatch } from 'src/store';
import { fetchTasks } from 'src/store/todos/todoSlice';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/Title/Title';

export const TaskListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <PageContainer>
      <PageLayout>
        <NavigationSection component="section">
          <Title name="ToDo List" />
          <SearchInputContainer />
          <Filter />
        </NavigationSection>

        <ListSection component="section">
          <TodoList />
        </ListSection>
      </PageLayout>
    </PageContainer>
  );
};
