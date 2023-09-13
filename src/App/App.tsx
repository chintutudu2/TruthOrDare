import React from 'react';
import Screens from '@screens/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Screens.MainScreens.LetsPlay />
    </SafeAreaProvider>
  );
};

export default App;