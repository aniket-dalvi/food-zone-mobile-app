import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Home, Register} from './screens';
import {textSize} from './constants/sizes';
import {TNativeStackNavigationParams} from './types/navigation';

const Stack = createNativeStackNavigator<TNativeStackNavigationParams>();

const Routes = () => {
  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#7E1717',
      background: '#FCF5ED',
      text: '#fff',
    },
  };

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          orientation: 'portrait',
          headerTintColor: AppTheme.colors.text,
          headerTitleStyle: {fontSize: textSize.large, fontWeight: 'bold'},
          headerStyle: {
            backgroundColor: AppTheme.colors.primary,
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
