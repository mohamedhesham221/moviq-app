import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useGetTvDetails } from "@/hooks/useGetTvDetails";
import Loader from "@/components/Loader";
import MediaPicture from "@/components/media/MediaPicture";
import ErrorComponent from "@/components/ErrorComponent";
import MediaOverview from "@/components/media/MediaOverview";
import MediaCastWrapper from "@/components/media/MediaCastWrapper";
import { useMediaCast } from "@/hooks/useMediaCast";

export default function TvDetails() {
  const { id } = useLocalSearchParams();
  const tvID = Number(id);
  const { tv, isLoading, isError } = useGetTvDetails(tvID);
  const { cast } = useMediaCast({ id: tvID, type: "tv" });

  if (isLoading) return <Loader />;
  if (isError || !tv) return <ErrorComponent />;


  return (
    <ScrollView>
      <View className="pb-10">
        <MediaPicture
          backdropPath={tv.backdrop_path}
          id={tv.id}
          title={tv.name}
          genres={tv.genres}
          vote_average={tv.vote_average}
        />
        <MediaOverview overview={tv.overview} />
        <MediaCastWrapper cast={cast}/>
      </View>
    </ScrollView>
  );
}
