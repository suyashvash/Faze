import 'react-native-gesture-handler';
import React, { useEffect } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingStack from './src/screens/onBoardingStack/onBoardingStack.js';

import { Routes } from './src/screens/routes';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import store from './app/store'
import { LoggedIn } from './app/useStore'

import { LogBox } from 'react-native';
import MainTabNavigator from './src/screens/mainStack/mainTab.js';

const AppStack = createStackNavigator();

const AppNavigator = () => {


  LogBox.ignoreAllLogs()

  const loggedIn = LoggedIn()
  return (
    <AppStack.Navigator initialRouteName={loggedIn ? Routes.App : Routes.onBoarding}>
      <AppStack.Screen name={Routes.onBoarding} component={OnBoardingStack} options={{ headerShown: false }} />
      <AppStack.Screen name={Routes.App} component={MainTabNavigator} options={{ headerShown: false }} />
    </AppStack.Navigator>
  )
}

function App() {

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


export default App;
