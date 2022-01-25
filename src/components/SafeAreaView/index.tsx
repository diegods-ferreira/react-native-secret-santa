import React from 'react';
import { Platform, View } from 'react-native';
import { SafeAreaView as RNSACSafeAreaView } from 'react-native-safe-area-context';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

export const SafeAreaView: React.FC = ({ children }) => {
  if (Platform.OS === 'android') {
    return (
      <RNSACSafeAreaView style={{ flex: 1 }}>{children}</RNSACSafeAreaView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: getStatusBarHeight(),
        paddingBottom: getBottomSpace(),
      }}
    >
      {children}
    </View>
  );
};
