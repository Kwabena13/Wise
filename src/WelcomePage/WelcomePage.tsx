import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppAssets from '../../assets/registry';
import { useNavigation } from '@react-navigation/native';

const WelcomePage: React.FC = () => {
 const navigation = useNavigation();

 return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Our Tutoring App!</Text>
        <Text style={styles.description}>Find the right tutor for your learning needs and goals, all from the comfort of your home.</Text>
        <Image source={AppAssets.Images.Welcome} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Sign in </Text>
        </TouchableOpacity>
        <View style={styles.alternativeLogin}>
          <Text style={styles.alternativeLoginText}>Log in with your Email?</Text>
          <TouchableOpacity onPress={() => console.log('Log in with your email')}>
            <Text style={styles.alternativeLoginLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 50,
    marginBottom: 70,
    paddingTop: 20,
 },
 title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
 },
 description: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
 },
 image: {
    width: 350,
    height: 350,
    marginBottom: 20,
 },
 button: {
    backgroundColor: '#4e9af1',
    padding: 15,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
    marginTop: 20,
 },
 buttonText: {
    color: 'white',
    fontSize: 16,
 },
 alternativeLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
 },
 alternativeLoginText: {
    fontSize: 15,
    color: 'white',
    
 },
 alternativeLoginLink: {
    fontSize: 15,
    color: '#4e9af1',
    marginLeft: 10,
    
 },
});

export default WelcomePage;
