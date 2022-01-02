import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type WelcomeRoutesParams = {
  Welcome: undefined;
  WelcomeUser: undefined;
};

export type WelcomeScreenRouteProps = NativeStackScreenProps<
  WelcomeRoutesParams,
  'Welcome'
>;

export type WelcomeUserScreenRouteProps = NativeStackScreenProps<
  WelcomeRoutesParams,
  'WelcomeUser'
>;
