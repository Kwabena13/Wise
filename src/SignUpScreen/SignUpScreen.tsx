import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Animated, useColorScheme } from "react-native";

const SignUpScreen = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");

 const logoAnimation = useRef(new Animated.Value(0)).current;
 const colorScheme = useColorScheme(); // Detect the current color scheme

 useEffect(() => {
    Animated.loop(
      Animated.timing(logoAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
 }, []);

 const handleSignUp = () => {
    console.log("Sign Up with:", email, password, confirmPassword);
    // Add validation and sign-up logic here
 };

 // Define theme-specific colors
 const Colors = {
   light: {
     background: "#f5f5f5",
     text: "#333",
     button: "#4e9af1",
     buttonText: "#ffffff",
   },
   dark: {
     background: "#121212",
     text: "#ffffff",
     button: "#4e9af1",
     buttonText: "#ffffff",
   },
 };

 // Apply theme-specific styles
 const theme = Colors[colorScheme] || Colors.light;

 return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Animated.Image
        source={require('../assets/icons/wiseTutor.png')}
        style={[styles.logo, { transform: [{ scale: logoAnimation }] }]}
      />
      <Text style={[styles.header, { color: theme.text }]}>WiseTutor Sign Up</Text>

      <TextInput
        style={[styles.input, { backgroundColor: theme.background }]}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { backgroundColor: theme.background }]}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={[styles.input, { backgroundColor: theme.background }]}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
      />

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.button }]} onPress={handleSignUp}>
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
 },
 logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
 },
 header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
 },
 input: {
    width: "100%",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
 },
 button: {
    padding: 15,
    borderRadius: 5,
    width: "100%",
    marginTop: 20,
 },
 buttonText: {
    textAlign: "center",
    fontSize: 16,
 },
});

export default SignUpScreen;

