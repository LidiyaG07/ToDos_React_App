import React, { useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './theme/theme';
import { RootState } from './store';
import { TaskListPage } from 'pages/TaskListPage/TaskListPage';
import { AddTaskPage } from 'pages/AddTaskPage/AddTaskPage';
import { EditTaskPage } from 'pages/EditTaskPage/EditTaskPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

export interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskListPage />} />
            <Route path="/tasks" element={<TaskListPage />} />
            <Route path="/add-task" element={<AddTaskPage />} />
            <Route path="/edit-task/:id" element={<EditTaskPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
