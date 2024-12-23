import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignupScreen from '../screens/Login';
import GetStarted from '../screens/GetStarted'; 
import SplashScreen from '../screens/SplashScreen';

const UnAuthStack = createStackNavigator();

function UnAuthStackNavigator() {
  return (
    <UnAuthStack.Navigator screenOptions={{ headerShown: false }}>
      <UnAuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <UnAuthStack.Screen name="LoginSignUp" component={LoginSignupScreen} />
      <UnAuthStack.Screen name="GetStarted" component={GetStarted} />
    </UnAuthStack.Navigator>
  );
}

export default UnAuthStackNavigator;
