import React from 'react';
import { Switch, TouchableOpacity, View } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import boxShadow from '../../global/styles/boxShadow';

import { Container, Header, HeaderTitle, Text, WelcomeText } from './styles';

export const DrawerContent: React.FC<DrawerContentComponentProps> = ({
  navigation,
  ...rest
}) => {
  return (
    <Container>
      <DrawerContentScrollView
        {...rest}
        contentContainerStyle={{ paddingTop: 0 }}
      >
        <Header style={boxShadow}>
          <WelcomeText>Bem-vindo ao</WelcomeText>
          <HeaderTitle>Amigo Secreto</HeaderTitle>
        </Header>

        <View>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            )}
            label="Início"
            onPress={() => navigation.navigate('Home')}
          />
        </View>

        <View>
          <TouchableOpacity>
            <Text>Dark theme</Text>
            <Switch />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      <View>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sair"
          onPress={() => {}}
        />
      </View>
    </Container>
  );
};
