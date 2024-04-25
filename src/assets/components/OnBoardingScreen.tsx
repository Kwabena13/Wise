import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import AppAssets from '../../assets/registry';

const slides = [
  {
    key: 'one',
    title: 'Connect with Expert Tutors',
    description: 'Find the right tutor for your learning needs and goals, all from the comfort of your home.',
    image: AppAssets.icons.questionmark,
  },
  {
    key: 'two',
    title: 'Flexible Scheduling',
    description: 'Schedule sessions at times that work best for you, with real-time calendar updates.',
    image: AppAssets.icons.recruitersearching,
  },
  {
    key: 'three',
    title: 'Personalized Learning Experience',
    description: 'Enjoy tailored tutoring sessions designed to fit your individual learning style and pace.',
    image: AppAssets.icons.book, // Assuming 'userprofile' is the correct icon for this content
  },
];

const OnboardingScreen = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const navigation = useNavigation();

  const renderSlide = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  if (showRealApp) {
    navigation.navigate('Welcome'); // Navigate to WelcomePage
    return null;
  }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderSlide}
      onDone={() => setShowRealApp(true)} // This will trigger navigation
      showSkipButton={true}
      onSkip={() => setShowRealApp(true)} // This will also trigger navigation}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});

export default OnboardingScreen;
