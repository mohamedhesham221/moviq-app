import { View, Text, FlatList } from "react-native";
import React from "react";
import { useMovies } from "@/hooks/useMovies";
import Loader from "../Loader";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import PosterItem from "../PosterItem";

const MoviesItems = ({ value }: { value: string }) => {
  const { movies, isError, isLoading } = useMovies(value);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
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
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PosterItem poster={item.poster_path} title={item.title} />
      )}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "center",
        marginBottom: 16,
      }}
      contentContainerStyle={{
        paddingTop: 15,
      }}
    />
  );
};

export default MoviesItems;
