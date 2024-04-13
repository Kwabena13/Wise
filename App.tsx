import React, { useState, useEffect } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import SplashScreen from './src/SplashScreen/SplashScreen';
import OnboardingScreen from './src/OnBoardingScreen/OnBoardingScreen';
import SignUpScreen from './src/SignUpScreen/SignUpScreen';
import LoginScreen from './src/LoginScreen/LoginScreen';
import HomePage from './src/HomePage/HomePage';
import TutorListingScreen from './src/TutorListingScreen/TutorListingScreen';
import SchedulingScreen from './src/SchedulingScreen/SchedulingScreen';
import SessionDetailScreen from './src/SessionDetailScreen/SessionDetailScreen';
import SettingsScreen from './src/SettingsScreen/SettingsScreen';
import RatingsReviewsScreen from './src/RatingsReviewScreen/RatingsReviewScreen';
import NotificationsScreen from './src/NotificationScreen/NotificationScreen';



function App() {
 const [isShowingSplashScreen, setIsShowingSplashScreen] = useState(true);
 const colorScheme = useColorScheme(); // Use useColorScheme hook

 useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowingSplashScreen(false);
    }, 3000);
    return () => clearTimeout(timer);
 }, []);

 // Define your styles based on the colorScheme
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
    },
    // Add other styles that should change based on the colorScheme
 });

 return (
    <View style={styles.container}>
      {/* Your app's content */}
      <SplashScreen/>
    </View>
 );
}

export default App;