import { View, Text, FlatList } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useSearch } from "@/hooks/useSearch";
import Loader from "../Loader";
import PosterItem from "../PosterItem";

type SearchItemsProps = {
  searchQuery: string;
};
const SearchItems = ({ searchQuery }: SearchItemsProps) => {
   const { results, isLoading, isError } = useSearch(searchQuery);
  if (results.length === 0 || !searchQuery || !results) {
    return (
      <View className="flex-1 items-center justify-center gap-4 mt-6">
        <MaterialCommunityIcons name="movie-open" size={24} color="white" />
        <Text className="text-white font-poppins-regular">
          Explore Movies and TV Shows
        </Text>
      </View>
    );
  }
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
      data={results}
      keyExtractor={(item) => item.media_type + item.id}
      renderItem={({ item }) => <PosterItem poster={item.poster_path} title={item.title || item.name} id={item.id} mediaType={item.media_type}/>}
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

export default SearchItems;
