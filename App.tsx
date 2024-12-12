import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import GetStarted from './src/screens/GetStarted';
import DetailScreen from './src/screens/detailScreen';
import Favourites from './src/screens/Favourites';
import Cart from './src/screens/Cart';
import Notifications from './src/screens/Notifications';
import { FavouritesProvider } from './src/Context/FavouritesContext';

const Stack = createNativeStackNavigator();
const App = () =>  {
  
  return (
    <FavouritesProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStarted'>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Favourites" component={Favourites} options={{ headerShown: false }}/>
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
        <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </FavouritesProvider>
  );
}

export default App;
