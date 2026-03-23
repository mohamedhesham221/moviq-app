import { Season } from "@/types/api.types";
import React from "react";
import { FlatList, View } from "react-native";
import SectionHeader from "../SectionHeader";
import SeasonItem from "./SeasonItem";

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
