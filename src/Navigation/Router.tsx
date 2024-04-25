import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from '../assets/components/OnBoardingScreen';
import WelcomePage from '../assets/components/WelcomePage'; // Import WelcomePage
import HomePage from '../assets/components/HomePage';

type RootStackParamList = {
    OnBoarding: undefined;
    Welcome: undefined;
    Home: undefined;
   };

const Stack = createStackNavigator();

const Router = () => {
 return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Welcome" component={WelcomePage} /> {/* Add WelcomePage to the stack */}
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
 );
};

export default Router;
