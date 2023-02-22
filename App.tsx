/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen } from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';

const AuthStack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name='Onboarding' component={OnboardingScreen} />
        <AuthStack.Screen name='Login' component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
