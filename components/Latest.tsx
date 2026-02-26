import { View, Text, SectionList } from "react-native";
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { useNowPlaying } from "@/hooks/useNowPlaying";
import { useOnTheAir } from "@/hooks/useOnTheAir";
import LatestSkeleton from "./skeletons/LatestSkeleton";
import LatestItem from "./LatestItem";
import Trending from "./Trending";
type Media = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  overview: string;
  vote_average: string;
  genre_ids?: number[];
};
const Latest = () => {
  const { movies } = useNowPlaying();
  const { series } = useOnTheAir();
  
  const DATA: {
    title: string;
    data: Media[];
  }[] = [
    {
      title: "Now Playing",
      data: movies || [],
    },
    {
      title: "On The Air",
      data: series || [],
    },
  ];

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <LatestItem item={item}/>}
      renderSectionHeader={({ section: { title } }) => (
        <View style={{marginTop: 15}}>
        <SectionHeader text={title} showBackButton={false} />
        </View>
      )}
      ListHeaderComponent={Trending}
      ListEmptyComponent={() =>
        Array.from({ length: 3 }).map((_, index) => (
          <View key={index}>
            <LatestSkeleton />
          </View>
        ))
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Latest;
