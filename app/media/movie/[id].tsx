import { View, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useGetMovieDetails } from "@/hooks/useGetMovieDetails";
import Loader from "@/components/Loader";
import MediaPicture from "@/components/media/MediaPicture";
import ErrorComponent from "@/components/ErrorComponent";
import MediaOverview from "@/components/media/MediaOverview";
import MediaCastWrapper from "@/components/media/MediaCastWrapper";
import { useMediaCast } from "@/hooks/useMediaCast";

export default function MovieDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const movieID = Number(id);
  const { movie, isLoading, isError } = useGetMovieDetails(movieID);
  const { cast } = useMediaCast({ id: movieID, type: "movie" });

  if (isLoading) return <Loader />;
  if (isError || !movie) return <ErrorComponent />;

  return (
    <ScrollView>
      <View className="pb-10">
        <MediaPicture
          backdropPath={movie.backdrop_path}
          id={movie.id}
          title={movie.title}
          genres={movie.genres}
          vote_average={movie.vote_average}
        />
        <MediaOverview overview={movie.overview} />
        <MediaCastWrapper cast={cast}/>
      </View>
    </ScrollView>
  );
}
