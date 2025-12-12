import React from 'react';
import { Typography } from '@mui/material';
import { InfoContainer } from './styled';
import { DescriptionProps } from './Description.types';

export const Description: React.FC<DescriptionProps> = ({ info }) => {
  return (
    <InfoContainer>
      <Typography variant="body2">{info || 'No description'}</Typography>
    </InfoContainer>
  );
};
