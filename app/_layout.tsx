// layout.tsx
import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Home from "./home";
import RaiseEnquiry from "./raiseenquiry";
import ExploreFeed from "./explorefeed";
import { StatusBar } from "expo-status-bar";
const Drawer = createDrawerNavigator();

export default function DrawerLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: '#F2C4D5', 
            drawerInactiveTintColor: '#333', 
            headerShown: false,
            drawerStyle: {
              backgroundColor: '#000', 
            },
          }}
        >
          <Drawer.Screen
            name="home"
            component={Home}
            options={{
              title: "Home",
              drawerIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="raiseenquiry"
            component={RaiseEnquiry} 
            options={{
              title: "Raise Enquiry",
              drawerIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? "create" : "create-outline"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="explorefeed"
            component={ExploreFeed} 
            options={{
              title: "Explore Feed",
              drawerIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? "newspaper" : "newspaper-outline"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
         
        </Drawer.Navigator>

    </GestureHandlerRootView>
  );
}
