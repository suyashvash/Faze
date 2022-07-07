
import React, { useEffect } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../../routes';
import ProfileScreen from './myProfileScreen';


const ProfileStack = createStackNavigator();

export default function ProfileNavigator () {

  return (
    <ProfileStack.Navigator initialRouteName={Routes.tabs.profileStack.profileScreenScreen}>
      <ProfileStack.Screen name={Routes.tabs.profileStack.profileScreenScreen} component={ProfileScreen} options={{ headerShown: true }} />
    
    </ProfileStack.Navigator>
  )
}