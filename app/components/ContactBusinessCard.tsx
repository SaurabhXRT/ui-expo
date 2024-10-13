import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactBusinessCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Contact business at:</Text>
      <Text style={styles.contactInfo}><Ionicons name="person" /> Mr. Robert Liv</Text>
      <Text style={styles.contactInfo}><Ionicons name="briefcase" /> Sr. Manager</Text>
      <Text style={styles.contactInfo}><Ionicons name="call" /> +123 456 7890</Text>
      <Text style={styles.contactInfo}><Ionicons name="mail" /> diana.jane@domain.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fce4ec',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 14,
    marginVertical: 2,
  },
});
