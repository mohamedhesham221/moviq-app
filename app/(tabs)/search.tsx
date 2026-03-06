import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import React from "react";
import Search from "@/components/search/Search";

const search = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="bg-black-color flex-1 justify-start px-5 py-10">
        <Search />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default search;
