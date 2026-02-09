import { View, Text, ScrollView } from "react-native";
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Trending from "@/components/Trending";
import HomeSkeleton from "@/components/skeletons/HomeSkeleton";

const home = () => {
  return (
    <SafeAreaView className="bg-black-color flex-1">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 56 }}
      >
        <SectionHeader text="Trending" showBackButton={false} />
        <Trending />
        <HomeSkeleton />
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
