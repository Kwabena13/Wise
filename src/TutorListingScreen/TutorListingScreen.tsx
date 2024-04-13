import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';


const tutorsData = [
  {
    id: '1',
    name: 'Emmanuel Djaba',
    subject: 'Software Engineering',
    rating: '4.5',
    imageUrl: 'path/to/image1.png',
  },
  {
    id: '2',
    name: 'Nii Osa',
    subject: 'Business Management',
    rating: '4.3',
    imageUrl: 'path/to/image2.png',
  },
  {
    id: '3',
    name: 'King James',
    subject: 'Applied Maths',
    rating: '3.8',
    imageUrl: 'path/to/image2.png',
  },
  {
    id: '4',
    name: 'Ama Yeboah',
    subject: 'Humanities',
    rating: '4.8',
    imageUrl: 'path/to/image2.png',
  },
  {
    id: '5',
    name: 'Benedicta Okyere',
    subject: 'Accounting',
    rating: '4.8',
    imageUrl: 'path/to/image2.png',
  },
  
  // Add more tutor data here
];

const TutorListingScreen = () => {
  const [tutors, setTutors] = useState(tutorsData);

  useEffect(() => {
    // This is where you would fetch tutor data from a backend service
    setTutors(tutorsData);
  }, []);

  const renderTutor = ({ item }) => (
    <TouchableOpacity style={styles.tutorContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.tutorImage} />
      <View style={styles.tutorInfo}>
        <Text style={styles.tutorName}>{item.name}</Text>
        <Text style={styles.tutorSubject}>{item.subject}</Text>
        <Text style={styles.tutorRating}>Rating: {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Available Tutors</Text>
      <FlatList
        data={tutors}
        renderItem={renderTutor}
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
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  tutorContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tutorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tutorInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  tutorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tutorSubject: {
    fontSize: 16,
  },
  tutorRating: {
    fontSize: 14,
    color: '#666',
  },
});

export default TutorListingScreen;
