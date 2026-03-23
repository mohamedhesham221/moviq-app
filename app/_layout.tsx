//Root Layout
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./globals.css";

//stop splash screen before fonts loaded 
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  //hide splash screen when font loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                headerShown: false,
                contentStyle: { backgroundColor: "#111111" },
              }}
            />
            <Stack.Screen
              name="(auth)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
                contentStyle: { backgroundColor: "#111111" },
              }}
            />
            <Stack.Screen
              name="movies"
              options={{
                headerShown: false,
                contentStyle: { backgroundColor: "#111111" },
              }}
            />
            <Stack.Screen
              name="series"
              options={{
                headerShown: false,
                contentStyle: { backgroundColor: "#111111" },
              }}
            />
            <Stack.Screen
              name="media/movie/[id]"
              options={{
                headerShown: false,
                contentStyle: { backgroundColor: "#111111" },
              }}
            />
            <Stack.Screen
              name="media/tv/[id]"
              options={{
                headerShown: false,
                contentStyle: { backgroundColor: "#111111" },
              }}
            />
          </Stack>
        </QueryClientProvider>
      </SafeAreaProvider>
    </>
  );
}
