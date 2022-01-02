import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import boxShadow from '../../global/styles/boxShadow';

import { TextInput } from '../../components/TextInput';
import { DateInput } from '../../components/DateInput';
import { SwitchInput } from '../../components/SwitchInput';
import { Button } from '../../components/Button';

import {
  Container,
  InnerContainer,
  Title,
  Subtitle,
  FormContainer,
} from './styles';

export const WelcomeUser: React.FC = () => {
  const [birthDate, setBirthDate] = useState<Date>();
  const [enableDarkTheme, setEnableDarkTheme] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Container>
          <InnerContainer style={boxShadow}>
            <Title>Vamos começar!</Title>

            <Subtitle>Só vamos precisar de algumas informações...</Subtitle>

            <FormContainer>
              <TextInput
                icon="account"
                label="Seu nome*"
                placeholder="Como se chama?"
                autoCapitalize="words"
              />

              <DateInput
                label="Sua data de nascimento"
                placeholder="Quando você nasceu?"
                value={birthDate}
                onValueChange={(date: Date) => setBirthDate(date)}
                maximumDate={new Date()}
              />

              <TextInput
                icon="briefcase"
                label="Sua profissão"
                placeholder="Qual sua profissão?"
                autoCapitalize="words"
              />

              <TextInput
                icon="folder-text"
                label="Sua biografia"
                placeholder="Fale de você"
                autoCapitalize="sentences"
                multiline
                numberOfLines={5}
              />

              <SwitchInput
                label="Tema escuro?"
                icon="theme-light-dark"
                isEnabled={enableDarkTheme}
                onValueChange={() =>
                  setEnableDarkTheme((prevState) => !prevState)
                }
              />
            </FormContainer>

            <Button title="Finalizar" icon="check" />
          </InnerContainer>
        </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
