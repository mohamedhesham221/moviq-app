import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useGetMovieDetails } from "@/hooks/useGetMovieDetails";
import Loader from "@/components/Loader";
import MediaPicture from "@/components/media/MediaPicture";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function MovieDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const movieID = Number(id);
  const { movie, isLoading, isError } = useGetMovieDetails(movieID);

  if (isLoading) return <Loader />;
  if (isError || !movie) {
    return (
      <View className="flex-1 items-center justify-center gap-4 mt-6">
        <MaterialCommunityIcons name="movie-open" size={24} color="white" />
        <Text className="text-white font-poppins-regular">
          Something went wrong. Please try again later.
        </Text>
      </View>
    );
  }
  return (
    <View className="pb-10">
      <MediaPicture
        backdropPath={movie.backdrop_path}
        id={movie.id}
        title={movie.title}
        genres={movie.genres}
        vote_average={movie.vote_average}
      />
    </View>
  );
}
