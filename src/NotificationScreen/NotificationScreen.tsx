import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Mock user role, this would ideally come from your app's state management or authentication context
const userRole = 'tutee'; // or 'tutor'

// Notifications data, you might fetch this from your backend
const allNotifications = [
  { id: '1', for: 'tutor', type: 'Session Request', content: 'You have a new session request from Jane Doe for Algebra II.' },
  { id: '2', for: 'tutor', type: 'Session Reminder', content: 'Reminder: You have a tutoring session tomorrow at 3pm with John Smith.' },
  { id: '3', for: 'tutor', type: 'Feedback Received', content: "You've received new feedback from a recent session. Check it out!" },
  { id: '4', for: 'tutee', type: 'Session Confirmation', content: 'Your session with Dr. Emma Watson for Chemistry has been confirmed for September 10th, 10am.' },
  { id: '5', for: 'tutee', type: 'Session Reminder', content: "Don't forget your tutoring session tomorrow at 2pm with Mr. John Doe." },
  { id: '6', for: 'tutee', type: 'New Message', content: 'You have received a new message from your tutor, Sarah Lee.' },
];

const NotificationItem = ({ item }) => (
  <View style={styles.notificationItem}>
    <Text style={styles.notificationType}>{item.type}</Text>
    <Text>{item.content}</Text>
  </View>
);

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Filter notifications based on userRole
    const filteredNotifications = allNotifications.filter(notification => notification.for === userRole);
    setNotifications(filteredNotifications);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  notificationItem: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  notificationType: {
    fontWeight: 'bold',
  },
});

export default NotificationScreen;
