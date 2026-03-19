import { FlatList } from "react-native";
import React from "react";
import { useSeries } from "@/hooks/useSeries";
import Loader from "../Loader";
import PosterItem from "../PosterItem";
import ErrorComponent from "../ErrorComponent";

const SeriesItems = ({ value }: { value: string }) => {
  const { series, isError, isLoading } = useSeries(value);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorComponent />;
  }
  return (
    <FlatList
      data={series}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <PosterItem
          poster={item.poster_path}
          title={item.name}
          id={item.id}
          mediaType={"tv"}
        />
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
