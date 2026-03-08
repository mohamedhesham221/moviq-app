import { View, SectionList } from "react-native";
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { useNowPlaying } from "@/hooks/useNowPlaying";
import { useOnTheAir } from "@/hooks/useOnTheAir";
import LatestItem from "./LatestItem";
import Trending from "./Trending";
import Loader from "./Loader";
import AppLink from "./AppLink";
import { Href } from "expo-router";
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
    footerTitle: string;
    sectionHref: Href;
  }[] = [
    {
      title: "Now Playing",
      data: movies || [],
      footerTitle: "see more",
      sectionHref: "/movies",
    },
    {
      title: "On The Air",
      data: series || [],
      footerTitle: "see more",
      sectionHref: "/series",
    },
  ];
  const isEmpty = DATA.every((section) => section.data.length === 0);
  if (isEmpty) {
    return <Loader />;
  }
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <LatestItem item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <View className="mt-5">
          <SectionHeader text={title} showBackButton={false} />
        </View>
      )}
      renderSectionFooter={({ section: { footerTitle, sectionHref } }) => (
        <View className="w-full items-center justify-center">
          <AppLink text={footerTitle} href={sectionHref} />
        </View>
      )}
      ListHeaderComponent={Trending}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Latest;
