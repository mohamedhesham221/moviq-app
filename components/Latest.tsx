import { View, SectionList } from "react-native";
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { useNowPlaying } from "@/hooks/movies/useNowPlaying";
import { useOnTheAir } from "@/hooks/series/useOnTheAir";
import LatestItem from "./LatestItem";
import Trending from "./Trending";
import AppLink from "./AppLink";
import { Href } from "expo-router";
import LatestSkeleton from "./skeletons/LatestSkeleton";
import type { Media } from "@/types/media.types";
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
  const SKELETON_SECTIONS: typeof DATA = [
    {
      title: "Now Playing",
      data: Array.from(
        { length: 4 },
        (_, i) => ({ id: `skeleton-movies-${i}`, isSkeleton: true }) as any,
      ),
      footerTitle: "see more",
      sectionHref: "/movies",
    },
    {
      title: "On The Air",
      data: Array.from(
        { length: 4 },
        (_, i) => ({ id: `skeleton-series-${i}`, isSkeleton: true }) as any,
      ),
      footerTitle: "see more",
      sectionHref: "/series",
    },
  ];
  const isLoading = !movies || !series;

  const sections = isLoading ? SKELETON_SECTIONS : DATA;

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) =>
        (item as any).isSkeleton ? (
          <LatestSkeleton />
        ) : (
          <LatestItem item={item} />
        )
      }
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
