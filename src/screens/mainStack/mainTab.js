import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from '../routes';
import MyContactNavigator from './myContactsStack/myContactsStack';
import RandomVCNavigator from './randomVcStack/randomVcStack';
import CallHistoryNavigator from './callHistoryStack/callHistoryStack';
import ProfileNavigator from './profileStack/profileStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons'
import OctIcons from 'react-native-vector-icons/Octicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../../utils/colors';

const MainTabStack = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
   
      
      <MainTabStack.Navigator screenOptions={{  tabBarShowLabel:false,}} initialRouteName={Routes.tabs.myContactStack.myContactTag}>
        <MainTabStack.Screen name={Routes.tabs.myContactStack.myContactTag} component={MyContactNavigator} 
            options={({ navigation, route }) => ({
            headerShown: false,
            tabBarIcon:()=> <AntDesign name={'contacts'} size={25} color={Colors.primary} />
                    })}
        />
        <MainTabStack.Screen name={Routes.tabs.randomVideoCallStack.rVCTag} component={RandomVCNavigator}  
            options={({ navigation, route }) => ({
            headerShown: false,
            tabBarIcon:()=> <IonIcons name={'earth'} size={25} color={Colors.primary} />
                  })}
        />
        <MainTabStack.Screen name={Routes.tabs.callHistoryStack.callHistoryTag} component={CallHistoryNavigator} 
            options={({ navigation, route }) => ({
            headerShown: false,
            tabBarIcon:()=> <OctIcons name={'history'} size={25} color={Colors.primary} />
                    })}
        />
        <MainTabStack.Screen name={Routes.tabs.profileStack.profileStackTag} component={ProfileNavigator} 
          options={({ navigation, route }) => ({
          headerShown: false,
          tabBarIcon:()=><FontAwesome5 name={'user-circle'} size={25} color={Colors.primary} />
                  })}
        />
      </MainTabStack.Navigator>

  );
}