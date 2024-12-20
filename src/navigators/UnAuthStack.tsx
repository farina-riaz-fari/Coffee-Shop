import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignupScreen from '../screens/Login';
import GetStarted from '../screens/GetStarted'; 

const UnAuthStack = createStackNavigator();

function UnAuthStackNavigator() {
  return (
    <UnAuthStack.Navigator screenOptions={{ headerShown: false }}>
      <UnAuthStack.Screen name="LoginSignUp" component={LoginSignupScreen} />
      <UnAuthStack.Screen name="GetStarted" component={GetStarted} />
    </UnAuthStack.Navigator>
  );
}

export default UnAuthStackNavigator;
