
import React, { useEffect } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../../routes';
import RandomVCFinderScreen from './randomVCFinderScreen';
import RandomVideoCallScreen from './rVideoCallScreen';
import RandomVCChatScreen from './rChatScreen';


const RandomVCStack = createStackNavigator();

export default function RandomVCNavigator () {

  return (
    <RandomVCStack.Navigator initialRouteName={Routes.tabs.randomVideoCallStack.callFinderScreen}>
      <RandomVCStack.Screen name={Routes.tabs.randomVideoCallStack.callFinderScreen} component={RandomVCFinderScreen} options={{ headerShown: true }} />
      <RandomVCStack.Screen name={Routes.tabs.randomVideoCallStack.videoCallScreen} component={RandomVideoCallScreen} options={{ headerShown: true }} />
      <RandomVCStack.Screen name={Routes.tabs.randomVideoCallStack.chatSection} component={RandomVCChatScreen} options={{ headerShown: true }} />
    </RandomVCStack.Navigator>
  )
}