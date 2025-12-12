import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledTodoList = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridAutoFlow: 'dense',
    alignItems: 'start',
  },

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridAutoFlow: 'dense',
    alignItems: 'start',
  },
}));

export const TaskColumn = styled(Box)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(1),
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const DesktopOnlyColumn = styled(TaskColumn)(({ theme }) => ({
  // display: 'none',
  // [theme.breakpoints.up('md')]: {
  //   display: 'flex',
  // },
}));

export const MobileOnlyColumn = styled(TaskColumn)(({ theme }) => ({
  display: 'flex',

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
