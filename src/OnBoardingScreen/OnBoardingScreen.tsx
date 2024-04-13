import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, useNavigation } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppAssets from '../assets/registry.js'; // Ensure this path is correct

const OnboardingScreen = () => {
 const navigation = useNavigation();

 return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome to WiseTutor</Text>

      <View style={styles.slide}>
        <Image source={AppAssets.icons.questionmark} style={styles.image} />
        <Text style={styles.title}>Connect with Expert Tutors</Text>
        <Text style={styles.description}>Find the right tutor for your learning needs and goals, all from the comfort of your home.</Text>
      </View>

      <View style={styles.slide}>
        <Image source={AppAssets.icons.recruitersearching} style={styles.image} />
        <Text style={styles.title}>Flexible Scheduling</Text>
        <Text style={styles.description}>Schedule sessions at times that work best for you, with real-time calendar updates.</Text>
      </View>

      <View style={styles.slide}>
        <Text style={styles.title}>Personalized Learning Experience</Text>
        <Text style={styles.description}>Enjoy tailored tutoring sessions designed to fit your individual learning style and pace.</Text>
      </View>

      <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {
    alignItems: "center",
    padding: 20,
 },
 header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
 },
 slide: {
    alignItems: "center",
    marginBottom: 20,
 },
 title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
 },
 description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 10,
 },
 image: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginBottom: 10, // Add some space below the image
 },
 getStartedButton: {
    backgroundColor: "#4e9af1",
    padding: 15,
    borderRadius: 5,
    width: "60%",
    alignItems: "center",
    marginTop: 20,
 },
 buttonText: {
    color: "#ffffff",
    fontSize: 16,
 },
});

export default OnboardingScreen;
