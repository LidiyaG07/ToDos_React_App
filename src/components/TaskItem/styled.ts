import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { display, width } from '@mui/system';
import { StyledTaskItemProps } from './TaskItem.types';

export const TaskContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  borderBottom: `1px solid ${theme.palette.divider}`,
  gap: theme.spacing(1),
  minHeight: '60px',
}));

export const StyledTaskItem = styled(Box, {
  shouldForwardProp: (prop) => !['$hasDescription', '$expanded'].includes(prop as string),
})<StyledTaskItemProps>(({ theme, $hasDescription, $expanded }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),

  [theme.breakpoints.down('lg')]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const StyledTaskText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'completed',
})<{ completed: boolean }>(({ theme, completed }) => ({
  flexGrow: 1,
  // minWidth: '4rem',
  // maxWidth: '6rem',
  width: '10rem',
  textDecoration: completed ? 'line-through' : 'none',
  color: completed ? theme.palette.text.secondary : theme.palette.text.primary,
  margin: 0,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: '1.4',
  maxHeight: '2.8em',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '600px',
    flexGrow: 1,
  },
}));

export const StyledActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  flexShrink: 0,
}));
