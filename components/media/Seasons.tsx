import { View, Text, FlatList } from "react-native";
import React from "react";
import SectionHeader from "../SectionHeader";
import { Season } from "@/interfaces/api";
import SeasonItem from "./SeasonItem";
import SeasonModal from "./SeasonModal";

type SeasonsProps = {
  seasons: Season[];
};
const Seasons = ({ seasons }: SeasonsProps) => {

  return (
    <View className="pt-10 px-5">
      <SectionHeader text="Seasons" />
      <FlatList
        horizontal
        contentContainerClassName="flex-row gap-5"
        showsHorizontalScrollIndicator={false}
        data={seasons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <SeasonItem season={item} />}
      />
    </View>
  );
};

export default Seasons;
