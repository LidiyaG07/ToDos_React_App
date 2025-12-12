import React from 'react';
import { PageContainerProps } from './PageContainer.types';
import { StyledContainer, StyledMain } from './styled';
import { Navigation } from 'components/Navigation/Navigation';

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <StyledContainer className={className}>
      <Navigation />
      <StyledMain component="main">{children}</StyledMain>
    </StyledContainer>
  );
};
