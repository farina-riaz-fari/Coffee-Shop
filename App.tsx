import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavouritesProvider } from './src/Context/FavouritesContext';
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid, View } from 'react-native';
import { NotificationsProvider } from './src/Context/NotificationsContext';
import Toast from 'react-native-toast-message';
import ApplicationStack from './src/navigators';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    const requestUserPermission = async () => {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        const token = await messaging().getToken();
        // console.log('FCM token: ', token); 
      }
    };
    requestUserPermission();
  }, []);

  return (
    <NotificationsProvider>
      <FavouritesProvider>
            <ApplicationStack />
            <Toast />
      </FavouritesProvider>
    </NotificationsProvider>
  );
};

export default App;
