import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LocateUs: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dar4ws6v6/image/upload/v1728737099/ejujibqof1ubcjewachq.jpg',
          }}
          style={styles.mapImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Locate us</Text>
      </View>
    </View>
  );
};

export default LocateUs;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 200, // Adjust height as needed
    borderRadius: 10,
    backgroundColor: '#f8f8f8', 
    overflow: 'hidden',
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '60%', 
   
    backgroundColor: '#F2C4D5', 
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: '30%', 
    borderRadius: 10,
    backgroundColor: '#F2C4D5', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
