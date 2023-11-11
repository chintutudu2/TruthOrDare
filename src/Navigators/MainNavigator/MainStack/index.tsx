import {NavRoutes} from '@constants/NavRoutes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddPlayers, Age, Game, LetsPlay, Settings} from '@screens/Main';
import {CreateScreen} from '@utils/NavUtils';
import React from 'react';

const Stack = createNativeStackNavigator();

const MainStack = ({navigation, route}: {navigation?: any; route?: any}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      {CreateScreen(Stack)(NavRoutes.LetsPlay, LetsPlay)}
      {CreateScreen(Stack)(NavRoutes.Age, Age)}
      {CreateScreen(Stack)(NavRoutes.AddPlayers, AddPlayers)}
      {CreateScreen(Stack)(NavRoutes.Game, Game)}
      {CreateScreen(Stack)(NavRoutes.Settings, Settings)}
    </Stack.Navigator>
  );
};

export {MainStack};
