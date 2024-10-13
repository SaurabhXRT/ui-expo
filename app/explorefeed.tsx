import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Explorefeed() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>explorefeed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f8f8f8', 
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
