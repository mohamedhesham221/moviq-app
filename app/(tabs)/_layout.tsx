import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";
interface StyleScheme {
  background: string;
  activeTint: string;
  inactiveTint: string;
  size: number;
}
const styles: StyleScheme = {
  background: "#111111",
  activeTint: "#ffc700",
  inactiveTint: "#FFFFFF",
  size: 28,
};
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        
        tabBarStyle: {
          backgroundColor: styles.background,
          height: 70,
          paddingTop: 5,
          borderColor: "transparent",
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text
                style={{
                  color: styles.activeTint,
                }}
                className="font-poppins-bold"
              >
                Home
              </Text>
            ) : null,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={styles.size}
              color={focused ? styles.activeTint : styles.inactiveTint}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text
                style={{ color: styles.activeTint }}
                className="font-poppins-bold"
              >
                Search
              </Text>
            ) : null,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-search" : "movie-search-outline"}
              size={styles.size}
              color={focused ? styles.activeTint : styles.inactiveTint}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="watchlist"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text
                style={{ color: styles.activeTint }}
                className="font-poppins-bold"
              >
                Watchlist
              </Text>
            ) : null,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "bookmark" : "bookmark-outline"}
              size={styles.size}
              color={focused ? styles.activeTint : styles.inactiveTint}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Text
                style={{ color: styles.activeTint }}
                className="font-poppins-bold"
              >
                Profile
              </Text>
            ) : null,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              size={styles.size}
              color={focused ? styles.activeTint : styles.inactiveTint}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
