import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Animated, useColorScheme } from "react-native";

const LoginScreen = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const colorScheme = useColorScheme(); // Detect the current color scheme

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

 const logoAnimation = useRef(new Animated.Value(0)).current;

 useEffect(() => {
    Animated.loop(
      Animated.timing(logoAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
 }, []);

 const handleLogin = () => {
    console.log("Login with:", email, password);
 };

 return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Animated.Image
        source={require('../assets/icons/wiseTutor.png')}
        style={[styles.logo, { transform: [{ scale: logoAnimation }] }]}
      />
      <Text style={[styles.header, { color: theme.text }]}>WiseTutor Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: theme.background }]}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: theme.background }]}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.button }]} onPress={handleLogin}>
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Login</Text>
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
 inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
 },
 input: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
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

export default LoginScreen;
