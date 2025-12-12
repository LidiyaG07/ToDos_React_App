import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
  margin: `${theme.spacing(1)} auto 0 auto`,
  width: '100%',
  maxWidth: '1200px',
  padding: theme.spacing(0, 2),

  [theme.breakpoints.down('lg')]: {
    maxWidth: '930px',
  },
}));

export const StyledMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '5%',
  marginTop: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
}));

export const Center = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
