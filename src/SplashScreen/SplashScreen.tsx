import React from "react";
import { StyleSheet, View, Image, Text, StatusBar } from 'react-native';
import AppAssets from "../assets/registry.js";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {/* Use the imported image directly */}
            <Image
                source={AppAssets.icons.wiseTutor}
                style={styles.logo}
            />
            <Text style={styles.title}>Welcome to WiseTutor</Text>
            <Text style={styles.subtitle}>Empowering your learning journey</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
});

export default SplashScreen;
