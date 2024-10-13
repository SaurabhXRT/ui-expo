import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import ProfileCard from "./components/ProfileCard";
import ContactBusinessCard from "./components/ContactBusinessCard";
import LocateUs from "./components/LocateUs";
import ImageCard from "./components/ImageCard";
import TabCard from "./components/TabCard";
import LikesModal from "./components/LikesModal";
export default function Home() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.navbar}>
          <View style={styles.loremipsum}>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>LoremIpsum</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons
              name="search-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Ionicons
              name="notifications-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
          </View>
        </View>
        <ScrollView>
          <ProfileCard />
          <ContactBusinessCard />
          <LocateUs />
          <ImageCard />
          <TabCard />
          <LikesModal />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 26,
  },
  navbar: {
    backgroundColor: "#F2C4D5",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 1,
  },
  loremipsum: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
  },
});
