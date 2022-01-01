import React from 'react';

import { Button } from '../../components/Button';

import {
  Container,
  MainImageContainer,
  MainImage,
  TitleContainer,
  Title,
  Subtitle,
} from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <MainImageContainer>
        <MainImage />
      </MainImageContainer>

      <TitleContainer>
        <Title>Amigo Secreto</Title>

        <Subtitle>
          Dê uma pequena porção de felicidade para seus amigos!
        </Subtitle>

        <Button title="Começar" />
      </TitleContainer>
    </Container>
  );
};
