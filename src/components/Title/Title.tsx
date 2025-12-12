import React from 'react';
import { Typography } from '@mui/material';
import { TitleProps } from './Title.types';

export const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <Typography component="h2" variant="h3">
      {name}
    </Typography>
  );
};
