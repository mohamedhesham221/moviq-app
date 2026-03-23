// Watchlist Tab
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import PersonalWatchlist from "@/components/watchlist/PersonalWatchlist";

const watchlist = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-black-color flex-1 justify-center px-5 py-10">
        <PersonalWatchlist />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default watchlist;
