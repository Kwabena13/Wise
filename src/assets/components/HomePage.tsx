import React from "react";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome to WiseTutor</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.title}>Tutoring Made Easy</Text>
        <Text style={styles.text}>Connecting students with competent tutors, enhancing learning outside the classroom.</Text>
      </View>

      <View style={styles.featureSection}>
        <Text style={styles.title}>Our Features</Text>
        <Text style={styles.text}>- Intuitive Scheduling</Text>
        <Text style={styles.text}>- Competent Tutor Matching</Text>
        <Text style={styles.text}>- Real-time Session Coordination</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Join Our Community</Text>
        <Text style={styles.text}>Become part of a thriving community dedicated to academic excellence and personal growth.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Empowering Students, Enabling Tutors</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Soft gray background for the whole page
  },
  headerContainer: {
    marginBottom: 30,
    backgroundColor: '#ffffff', // White background for the header
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: '#333333', // Darker text color for better readability
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureSection: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: '#333333',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666666', // Lighter gray for text to reduce strain
  },
  button: {
    marginTop: 10,
    backgroundColor: "#4e9af1",
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
    paddingTop: 10,
  },
  footerText: {
    textAlign: "center",
    fontSize: 16,
    color: '#666666',
  }
});

export default HomePage;
