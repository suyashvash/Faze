import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../routes';
import LoginScreen from './loginScreen';
import ProfileBuildScreen from './profileBuildScreen';
import RegisterScreen from './registerScreen';

const onBoardingStack = createStackNavigator();

function OnBoardingStack() {

    const headerOptions = {
        //     headerTintColor: Colors.primary,
        headerShown: true,
        headerShadowVisible: true,
        headerStyle: { shadowColor: 'black', shadowOpacity: 1, elevation: 12, }
    }

    return (
        <onBoardingStack.Navigator initialRouteName={Routes.onBoardingStack.loginScreen}>
            <onBoardingStack.Screen name={Routes.onBoardingStack.loginScreen} component={LoginScreen} options={headerOptions} />
            <onBoardingStack.Screen name={Routes.onBoardingStack.registerScreen} component={RegisterScreen} options={headerOptions} />
            <onBoardingStack.Screen name={Routes.onBoardingStack.profileBuild} component={ProfileBuildScreen} options={headerOptions} />
        </onBoardingStack.Navigator>

    );
}

export default OnBoardingStack;
