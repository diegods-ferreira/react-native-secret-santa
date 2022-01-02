import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { WelcomeUserScreenRouteProps } from '../../data/routes/welcome';

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
  BackButton,
  BackButtonIcon,
} from './styles';

export const WelcomeUser: React.FC<WelcomeUserScreenRouteProps> = ({
  navigation,
}) => {
  const [birthDate, setBirthDate] = useState<Date>();
  const [enableDarkTheme, setEnableDarkTheme] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
        <Container>
          <InnerContainer style={boxShadow}>
            <BackButton onPress={() => navigation.goBack()}>
              <BackButtonIcon />
            </BackButton>

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
    </KeyboardAvoidingView>
  );
};
