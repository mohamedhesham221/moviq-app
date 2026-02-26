import { View, Text, FlatList } from "react-native";
import React from "react";
import { ENDPOINTS } from "@/constants/apiRoutes";
import { fetcher } from "@/services/api/handleRequest";
import { useQuery } from "@tanstack/react-query";
import TrendingFilters from "./TrendingFilters";
import TrendingSkeleton from "./skeletons/TrendingSkeleton";
import { TMDBResponse, Trend } from "@/interfaces/api";
import TrendingItem from "./TrendingItem";
import SectionHeader from "./SectionHeader";
const Trending = () => {
  const [timeframe, setTimeframe] = React.useState<"day" | "week">("day");
  const { data, isLoading, error } = useQuery<TMDBResponse<Trend>>({
    queryKey: ["trending", timeframe],
    queryFn: () => fetcher<TMDBResponse<Trend>>(ENDPOINTS.TRENDING(timeframe)),
  });

  return (
    <View className="px-2">
      <SectionHeader text="Trending" showBackButton={false} />
      <TrendingFilters timeframe={timeframe} setTimeframe={setTimeframe} />
      <FlatList
        horizontal
        className="py-4"
        contentContainerClassName="flex-row gap-4"
        showsHorizontalScrollIndicator={false}
        data={data?.results ?? []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TrendingItem
            title={item.title}
            id={item.id}
            name={item.name}
            backdrop_path={item.backdrop_path}
            vote_average={item.vote_average}
          />
        )}
        ListEmptyComponent={() =>
          Array.from({ length: 3 }).map((_, index) => (
            <View key={index}>
              <TrendingSkeleton />
            </View>
          ))
        }
      />
    </View>
  );
};

export default Trending;
