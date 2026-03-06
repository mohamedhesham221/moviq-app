import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSeries } from "@/hooks/useSeries";
import Loader from "../Loader";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import PosterItem from "../PosterItem";

const SeriesItems = ({ value }: { value: string }) => {
  const { series, isError, isLoading } = useSeries(value);
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
      data={series}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PosterItem poster={item.poster_path} title={item.name} />
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

export default SeriesItems;
