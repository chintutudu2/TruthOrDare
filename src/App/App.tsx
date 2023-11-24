import {
  getActiveRoute,
  getRoute,
  navigationRef,
} from '@helpers/NavigatorHelper';
import Navigators from '@navigators/index';
import {NavigationContainer, NavigationState} from '@react-navigation/native';
import React, {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useState} from 'react';
import {Nullable} from '@interfaces/GlobalInterfaces';

const App = () => {
  const [routeName, setRouteName] = useState<Nullable<string>>(null);
  const onStateChange = (state?: NavigationState) => {
    const previousRouteName = routeName;
    const currentRouteName = getRoute(state).name;
    if (previousRouteName !== currentRouteName) {
      setRouteName(currentRouteName);
    }
  };
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          setRouteName(getActiveRoute()?.name);
        }}
        onStateChange={onStateChange}>
        <Navigators.MainNavigator.MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
