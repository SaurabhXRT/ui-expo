import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';

const ProfileCard: React.FC = () => {
  return (
    <View style={styles.card}>
        <View style={styles.image}></View>
      <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/20b3/7c80/91739d1aff9cc0928e4851786fb82312?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YjOON8C0KtHK~mgiJAdGcfCRIpTnRXQIcDrTcDrRJHkBlBE7X5X8zYXTaAVSJ-sLXGsYTqHcFECgA-TfgzZit3kdxBG~FkDtiJWM-JPNUSDrk9yOO9qsIOcGV2SoiOCbDOSSs3qXhbQCXK9jy6nFnDoSyMcIcWurcbvkqrWGN7j8AV1WYHVVq7SPa00H5t61qE5XedCHNyhifDE6-FBarRw~2q1tCm295JnKpiI1Qj0Qk7XclnYzx9-b15afuHwyMiQLf1pRL11vGEfVWCkUrDUW6maEFS9N~RjT0GhjQVWEBVaZ5ILf24-jgmBYt00huRvQ4lARra4riE-iveBjcA__' }} style={styles.profileImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Viraj Shah</Text>
        <Text style={styles.username}>@iamvirajshah</Text>
        <Text style={styles.stats}>123 followers • 123 following • ★★★★★</Text>
        <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonmessage}>
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {

  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: 'gray',
  },
  stats: {
    fontSize: 12,
    color: 'gray',
  },
  bio: {
    fontSize: 14,
    marginVertical: 5,
  },
  actions: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#f2c4d5',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  buttonmessage: {
    borderWidth: 0.1,
    padding: 5,
    borderRadius: 1,
    marginRight: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
  },
});
