import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs, Tab, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { StyledAppBar, NavContainer } from './styled';
import { RootState } from 'src/store';
import { toggleTheme } from 'src/store/themeSlice';

export const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const currentTab = location.pathname;

  return (
    <StyledAppBar position="static">
      <NavContainer>
        <Tabs value={currentTab} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
          <Tab label="List tasks" value="/tasks" />
          <Tab label="Add tasks" value="/add-task" />
        </Tabs>

        <Box sx={{ ml: 'auto' }}>
          <IconButton onClick={handleToggleTheme} color="inherit" aria-label="toggle theme">
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </NavContainer>
    </StyledAppBar>
  );
};
