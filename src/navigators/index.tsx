import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import AuthStackNavigator from './AuthStack';
import UnAuthStackNavigator from './UnAuthStack';
import auth from '@react-native-firebase/auth';

const ApplicationStack = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#C67C4E" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthStackNavigator /> : <UnAuthStackNavigator />}
    </NavigationContainer>
  );
};

export default ApplicationStack;