import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const InfoContainer = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  width: '100%',
  padding: theme.spacing(1, 2),

  // alignItems: 'center',
  // justifyContent: 'start',
}));
