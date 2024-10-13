import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Feed from './Feed';
import RatingsAndReviews from './RatingsAndReviews';

export default function Tab() {
  const [selectedTab, setSelectedTab] = useState('Home');

  const renderContent = () => {
    switch (selectedTab) {
      case 'Home':
        return <Home />;
      case 'Feed':
        return <Feed />;
      case 'RatingsAndReviews':
        return <RatingsAndReviews />;
      default:
        return <Home />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Home' && styles.activeTab]}
          onPress={() => setSelectedTab('Home')}
        >
          <Ionicons
            name="home"
            size={18}
            color={selectedTab === 'Home' ? 'black' : 'gray'}
          />
          <Text style={[styles.tabText, selectedTab === 'Home' && styles.activeTabText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Feed' && styles.activeTab]}
          onPress={() => setSelectedTab('Feed')}
        >
          <Ionicons
            name="newspaper"
            size={18}
            color={selectedTab === 'Feed' ? 'black' : 'gray'}
          />
          <Text style={[styles.tabText, selectedTab === 'Feed' && styles.activeTabText]}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'RatingsAndReviews' && styles.activeTab]}
          onPress={() => setSelectedTab('RatingsAndReviews')}
        >
          <Ionicons
            name="star"
            size={18}
            color={selectedTab === 'RatingsAndReviews' ? 'black' : 'gray'}
          />
          <Text style={[styles.tabText, selectedTab === 'RatingsAndReviews' && styles.activeTabText]}>Ratings & Reviews</Text>
        </TouchableOpacity>
      </View>
      <View >
        {renderContent()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    elevation: 5,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    borderBottomColor: '#ddd',
  },
  tabButton: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
    borderBottomWidth: 2, 
    borderBottomColor: 'transparent', 
  },
  activeTab: {
    borderBottomColor: 'black', 
  },
  tabText: {
    fontSize: 14,
    marginLeft: 2,
    color: 'gray',
  },
  activeTabText: {
    color: 'black',
    fontWeight: 'bold',
  },

});
