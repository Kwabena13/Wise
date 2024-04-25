import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Platform, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Router from './src/Navigation/Router';




function App(): React.JSX.Element {

 useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
 }, []);

 return (
<Router/>   
 );
}

export default App;
