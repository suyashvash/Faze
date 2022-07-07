
import React, { useEffect } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../../routes';
import CallHistoryScreen from './callHistoryScreen';


const CallHistoryStack = createStackNavigator();

export default function CallHistoryNavigator () {

  return (
    <CallHistoryStack.Navigator initialRouteName={Routes.tabs.callHistoryStack.callHistoryScreen}>
      <CallHistoryStack.Screen name={Routes.tabs.callHistoryStack.callHistoryScreen} component={CallHistoryScreen} options={{ headerShown: true }} />
    
    </CallHistoryStack.Navigator>
  )
}