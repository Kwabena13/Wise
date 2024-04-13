import React, {useState} from 'react';
import {View, StyleSheet, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const SchedulingScreen = () => {
 const [date, setDate] = useState(new Date());
 const [mode, setMode] = useState('date');
 const [show, setShow] = useState(false);

 const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
 };

 const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
 };

 const showDatepicker = () => {
    showMode('date');
 };

 const showTimepicker = () => {
    showMode('time');
 };

 return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={showDatepicker} title="Select Date" color="#4e9af1" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={showTimepicker} title="Select Time" color="#4e9af1" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChange}
        />
      )}
      <Text style={styles.selectedText}>
        Selected: {date.toLocaleDateString()} {date.toLocaleTimeString()}
      </Text>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background color
 },
 buttonContainer: {
    marginBottom: 20, // Space between buttons
 },
 selectedText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18, // Increase font size for better readability
    fontWeight: 'bold', // Make the text bold
 },
});

export default SchedulingScreen;
