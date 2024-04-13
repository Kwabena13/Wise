import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const SessionDetailScreen = () => {
  // Sample data for a session
  const sessionDetails = {
    tutorName: 'John Doe',
    subject: 'Mathematics',
    date: '2023-05-20',
    time: '14:00',
    duration: '1 hour',
    notes: 'Please review algebraic equations and trigonometry basics.',
    tutorProfilePic: 'https://example.com/profile-pic.jpg', // Placeholder URL
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: sessionDetails.tutorProfilePic}} style={styles.profilePic} />
      <Text style={styles.headerText}>{sessionDetails.subject} with {sessionDetails.tutorName}</Text>
      <View style={styles.detailSection}>
        <Text style={styles.detailText}>Date: {sessionDetails.date}</Text>
        <Text style={styles.detailText}>Time: {sessionDetails.time}</Text>
        <Text style={styles.detailText}>Duration: {sessionDetails.duration}</Text>
        <Text style={styles.detailText}>Notes: {sessionDetails.notes}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Join Session</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailSection: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4e9af1',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default SessionDetailScreen;
