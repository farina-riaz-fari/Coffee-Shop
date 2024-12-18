import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import GetStarted from './src/screens/GetStarted';
import DetailScreen from './src/screens/detailScreen';
import Favourites from './src/screens/Favourites';
import Notifications from './src/screens/Notifications';
import {FavouritesProvider} from './src/Context/FavouritesContext';
import messaging from '@react-native-firebase/messaging';
import {Alert, PermissionsAndroid} from 'react-native';
import MyOrder from './src/screens/MyOrder';
import OrderDetail from './src/screens/OrderDetail';
import { NotificationsProvider } from './src/Context/NotificationsContext';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    const requestUserPermission = async () => {
      PermissionsAndroid.request(
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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStarted">
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Favourites"
            component={Favourites}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyOrder"
            component={MyOrder}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OrderDetail"
            component={OrderDetail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <Toast/>
      </NavigationContainer>
    </FavouritesProvider>
    </NotificationsProvider>
  );
};

export default App;
