import React, {useState} from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

//[3] Styling
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>RED</Text>
      <Text style={styles.blue}>BLUE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 50,
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
  },
  blue: {
    color: 'blue',
    fontWeight: '100',
    fontSize: 20,
  },
});

export default App;
