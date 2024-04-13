import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const RatingsReviewsScreen = () => {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const submitReview = () => {
    if (rating.trim() && review.trim()) {
      const newReview = { id: Date.now().toString(), rating, review };
      setReviews(currentReviews => [newReview, ...currentReviews]);
      setRating('');
      setReview('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Rate and Review Tutors</Text>
      <TextInput
        style={styles.input}
        onChangeText={setRating}
        value={rating}
        placeholder="Rating (1-5)"
        keyboardType="number-pad"
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        onChangeText={setReview}
        value={review}
        placeholder="Write a review"
        multiline
      />
      <Button title="Submit Review" onPress={submitReview} />
      <FlatList
        data={reviews}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewItem}>
            <Text style={styles.rating}>Rating: {item.rating}</Text>
            <Text>{item.review}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  reviewItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
  },
  rating: {
    fontWeight: 'bold',
  },
});

export default RatingsReviewsScreen;
