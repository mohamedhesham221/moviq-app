import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { getAccount } from "@/services/userAuth";
import Toast from "react-native-toast-message";
import { ToastConfigParams } from "react-native-toast-message";
import CustomToast from "@/components/CustomToast";

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
const toastConfig = {
  customSuccess: ({ text1 }: ToastConfigParams<any>) => (
    <CustomToast text={text1 ?? ""} color="#22c55e" iconName="check-circle" />
  ),

  customError: ({ text1 }: ToastConfigParams<any>) => (
    <CustomToast text={text1 ?? ""} color="#ef4444" iconName="close-circle" />
  ),

  customWarning: ({ text1 }: ToastConfigParams<any>) => (
    <CustomToast text={text1 ?? ""} color="#facc15" iconName="alert" />
  ),
  customRemove: ({text1}: ToastConfigParams<any>) => (
    <CustomToast text={text1 ?? ""} color="#FF5B5B" iconName="bookmark-remove" />
  )
};
const TabsLayout = () => {
  return (
    <>
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
          listeners={{
            tabPress: async (e) => {
              try {
                await getAccount();
              } catch (error) {
                e.preventDefault();
                console.log(error);
                router.replace("/(auth)/login");
                alert("Please log in to access your watchlist.");
              }
            },
          }}
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
          listeners={{
            tabPress: async (e) => {
              try {
                await getAccount();
              } catch (error) {
                e.preventDefault();
                console.log(error);
                router.replace("/(auth)/login");
                alert("Please log in to access your profile.");
              }
            },
          }}
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
      <Toast position="top" bottomOffset={50} config={toastConfig} visibilityTime={1200} />
    </>
  );
};

export default TabsLayout;
