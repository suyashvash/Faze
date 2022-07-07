import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from '../routes';
import MyContactNavigator from './myContactsStack/myContactsStack';
import RandomVCNavigator from './randomVcStack/randomVcStack';
import CallHistoryNavigator from './callHistoryStack/callHistoryStack';
import ProfileNavigator from './profileStack/profileStack';

const MainTabStack = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
   
      


      <MainTabStack.Navigator initialRouteName={Routes.tabs.myContactStack.myContactTag}>
        <MainTabStack.Screen name={Routes.tabs.myContactStack.myContactTag} component={MyContactNavigator} 
       options={({ navigation, route }) => ({
        headerShown: false
     
      })}/>
        <MainTabStack.Screen name={Routes.tabs.randomVideoCallStack.rVCTag} component={RandomVCNavigator}  options={{headerShown:false}}/>
        <MainTabStack.Screen name={Routes.tabs.callHistoryStack.callHistoryTag} component={CallHistoryNavigator} options={{headerShown:false}}/>
        <MainTabStack.Screen name={Routes.tabs.profileStack.profileStackTag} component={ProfileNavigator} options={{headerShown:false}}/>
      </MainTabStack.Navigator>

  );
}