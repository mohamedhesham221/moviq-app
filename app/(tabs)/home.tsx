import { View } from "react-native";
import React from "react";
import Latest from "@/components/Latest";

const home = () => {
  return (
    <View className="bg-black-color flex-1 px-5 py-10">
        <Latest />
    </View>
  );
};

export default home;
