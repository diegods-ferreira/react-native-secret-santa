import React from 'react';

import { WelcomeScreenRouteProps } from '../../data/routes/welcome';

import { SafeAreaView } from '../../components/SafeAreaView';
import { Button } from '../../components/Button';

import {
  Container,
  MainImageContainer,
  MainImage,
  TitleContainer,
  Title,
  Subtitle,
  WelcomeText,
} from './styles';

export const Welcome: React.FC<WelcomeScreenRouteProps> = ({ navigation }) => {
  return (
    <Container>
      <SafeAreaView>
        <MainImageContainer>
          <MainImage />
        </MainImageContainer>

        <TitleContainer>
          <WelcomeText>Bem-vindo ao</WelcomeText>

          <Title>Amigo Secreto</Title>

          <Subtitle>
            Dê uma pequena porção de felicidade para seus amigos e colegas!
          </Subtitle>

          <Button
            title="Começar"
            icon="arrow-right"
            iconRight
            onPress={() => navigation.navigate('WelcomeUser')}
          />
        </TitleContainer>
      </SafeAreaView>
    </Container>
  );
};
