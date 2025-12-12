import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const PageLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  width: '100%',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
}));

export const NavigationSection = styled(Box)(({ theme }) => ({
  width: '23%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const ListSection = styled(Box)(({ theme }) => ({
  width: '70%',

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
