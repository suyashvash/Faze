
import React, { useEffect } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '../../routes';
import MyContactsScreen from './myContactsScreen';
import MyContactVideoCallScreen from './mCVideoCall';
import MyContactChatScreen from './mCChatScreen';


const MyContactStack = createStackNavigator();

export default function MyContactNavigator () {

  return (
    <MyContactStack.Navigator initialRouteName={Routes.tabs.myContactStack.myContactsScreen}>
      <MyContactStack.Screen name={Routes.tabs.myContactStack.myContactsScreen} component={MyContactsScreen} options={{ headerShown: true }} />
      <MyContactStack.Screen name={Routes.tabs.myContactStack.videoCallScreen} component={MyContactVideoCallScreen} options={{ headerShown: true }} />
      <MyContactStack.Screen name={Routes.tabs.myContactStack.chatSection} component={MyContactChatScreen} options={{ headerShown: true }} />
    </MyContactStack.Navigator>
  )
}