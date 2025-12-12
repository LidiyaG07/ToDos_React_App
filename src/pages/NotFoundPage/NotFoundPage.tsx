import React from 'react';
import { Title } from 'components/Title';
import { PageContainer } from 'components/PageContainer';
import { Center } from 'components/PageContainer/styled';

export const NotFoundPage: React.FC = () => {
  return (
    <PageContainer>
      <Center>
        <Title name="404 - Страница не найдена" />
      </Center>
    </PageContainer>
  );
};
