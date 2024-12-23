import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from '../screens/GetStarted';
import Home from '../screens/Home';
import DetailScreen from '../screens/detailScreen';
import Favourites from '../screens/Favourites';
import Notifications from '../screens/Notifications';
import MyOrder from '../screens/MyOrder';
import OrderDetail from '../screens/OrderDetail';
import LoginSignupScreen from '../screens/Login';
import Settings from '../screens/Settings';
import SplashScreen from '../screens/SplashScreen';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashScreen'>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="LoginSignUp" component={LoginSignupScreen} />
      <AuthStack.Screen name="GetStarted" component={GetStarted} />
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name="DetailScreen" component={DetailScreen} />
      <AuthStack.Screen name="Favourites" component={Favourites} />
      <AuthStack.Screen name="Notifications" component={Notifications} />
      <AuthStack.Screen name="MyOrder" component={MyOrder} />
      <AuthStack.Screen name="OrderDetail" component={OrderDetail} />
      <AuthStack.Screen name="Settings" component={Settings} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
