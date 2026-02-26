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
  const isEmpty = DATA.every((section) => section.data.length === 0);
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <LatestItem item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <View style={{ marginTop: 20 }}>
          <SectionHeader text={title} showBackButton={false} />
        </View>
      )}
      ListHeaderComponent={Trending}
      ListEmptyComponent={() =>
        isEmpty ? (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <LatestSkeleton key={index} />
            ))}
          </>
        ) : null
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Latest;
