import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity, LayoutChangeEvent, Dimensions } from 'react-native';

const images = [
  'https://res.cloudinary.com/dar4ws6v6/image/upload/v1710098638/aoms8w5bciad9pldzctt.jpg',
  'https://res.cloudinary.com/dar4ws6v6/image/upload/v1710099253/jcrrmx0ajkjby5ztqq9l.jpg',
  'https://res.cloudinary.com/dar4ws6v6/image/upload/v1698948155/40_Workstation_Setups_That_We_Really_Like_yeiegk.jpg',
  'https://res.cloudinary.com/dar4ws6v6/image/upload/v1698948154/Home_Office_Ideas_i0iwuy.jpg',
  'https://res.cloudinary.com/dar4ws6v6/image/upload/v1698948155/UltraLinx_ibaaue.jpg',
];

export default function ImageCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(Dimensions.get('window').width); 
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / cardWidth);
    setCurrentIndex(index);
  };

  const handleCardLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setCardWidth(width);
  };

  return (
    <View style={styles.card} onLayout={handleCardLayout}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <View key={index} style={[styles.imageContainer, { width: cardWidth }]}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {images.map((_, dotIndex) => (
          <TouchableOpacity
            key={dotIndex}
            style={[
              styles.dot,
              dotIndex === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
            onPress={() =>
              scrollViewRef.current?.scrollTo({ 
                x: dotIndex * cardWidth, 
                animated: true 
              })
            }
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    elevation: 1,
    overflow: 'hidden',
    height: 200,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dotContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#F8E4EB',
  },
  inactiveDot: {
    backgroundColor: 'lightgray',
  },
});
