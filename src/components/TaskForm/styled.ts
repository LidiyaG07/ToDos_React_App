import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const StyledForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(2),
}));

export const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'flex-end',
  marginTop: theme.spacing(2),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: '120px',
}));
