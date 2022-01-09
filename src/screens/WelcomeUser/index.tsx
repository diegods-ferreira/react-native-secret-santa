import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { WelcomeUserScreenRouteProps } from '../../data/routes/welcome';

import { useCustomTheme } from '../../hooks/custom-theme';
import { useUser } from '../../hooks/user';

import { TextInput } from '../../components/TextInput';
import { DateInput } from '../../components/DateInput';
import { SwitchInput } from '../../components/SwitchInput';
import { Button } from '../../components/Button';

import boxShadow from '../../global/styles/boxShadow';

import {
  Container,
  InnerContainer,
  Title,
  Subtitle,
  FormContainer,
  BackButton,
  BackButtonIcon,
} from './styles';

interface FormData {
  name: string;
  profession: string;
  birthDate: Date;
  biography: string;
  enableDarkMode: boolean;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  profession: Yup.string(),
  birthDate: Yup.date().required('Data de nascimento é obrigatória'),
  biography: Yup.string(),
  enableDarkMode: Yup.boolean(),
});

export const WelcomeUser: React.FC<WelcomeUserScreenRouteProps> = ({
  navigation,
}) => {
  const { selectedCustomTheme, toggleCustomTheme } = useCustomTheme();

  const { saveUser } = useUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [savingUser, setSavingUser] = useState(false);

  const handleSaveUserInfo = async (formData: FormData) => {
    setSavingUser(true);

    const { name, birthDate, profession, biography } = formData;

    await saveUser({ name, birthDate, profession, biography });
  };

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
                name="name"
                control={control}
                error={errors.name}
                icon="account"
                label="Seu nome*"
                placeholder="Como se chama?"
                autoCapitalize="words"
              />

              <DateInput
                name="birthDate"
                control={control}
                error={errors.birthDate}
                label="Sua data de nascimento*"
                placeholder="Quando você nasceu?"
                maximumDate={new Date()}
              />

              <TextInput
                name="profession"
                control={control}
                error={errors.profession}
                icon="briefcase"
                label="Sua profissão"
                placeholder="Qual sua profissão?"
                autoCapitalize="words"
              />

              <TextInput
                name="biography"
                control={control}
                error={errors.biography}
                icon="folder-text"
                label="Sua biografia"
                placeholder="Fale de você"
                autoCapitalize="sentences"
                multiline
                numberOfLines={5}
              />

              <SwitchInput
                name="enableDarkMode"
                control={control}
                label="Tema escuro?"
                icon="theme-light-dark"
                defaultValue={selectedCustomTheme === 'dark'}
                onValueChange={() => toggleCustomTheme()}
              />
            </FormContainer>

            <Button
              title="Finalizar"
              icon="check"
              onPress={handleSubmit(handleSaveUserInfo)}
              showLoadingIndicator={savingUser}
            />
          </InnerContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
