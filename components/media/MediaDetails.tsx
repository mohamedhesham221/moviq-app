import { Movie } from "@/types/movie.types";
import {
  formatReleaseDate,
  formatRevenue,
  formatRuntime,
} from "@/utils/format";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Text, View } from "react-native";
import SectionHeader from "../SectionHeader";
type MediaDetailsProps = Pick<
  Movie,
  "tagline" | "runtime" | "release_date" | "revenue"
>;

const MediaDetails = ({
  tagline,
  revenue,
  runtime,
  release_date,
}: MediaDetailsProps) => {
  return (
    <View className="px-5">
      <SectionHeader text="Details" />

      {tagline && (
        <Text className="text-gray-color font-poppins-regular text-sm text-center mb-6">
          {tagline}
        </Text>
      )}

      <View className="flex-row justify-between bg-chip-background rounded-xl p-4">
        {/* Revenue */}
        <View className="items-center gap-1">
          <MaterialCommunityIcons name="cash" size={22} color="#9CA3AF" />
          <Text className="text-gray-color text-xs font-poppins-regular">
            Revenue
          </Text>
          <Text className="text-white font-poppins-bold text-sm">
            {formatRevenue(revenue)}
          </Text>
        </View>

        {/* Runtime */}
        <View className="items-center gap-1">
          <MaterialCommunityIcons
            name="clock-outline"
            size={22}
            color="#9CA3AF"
          />
          <Text className="text-gray-color text-xs font-poppins-regular">
            Runtime
          </Text>
          <Text className="text-white font-poppins-bold text-sm">
            {formatRuntime(runtime)}
          </Text>
        </View>

        {/* Release Date */}
        <View className="items-center gap-1">
          <MaterialCommunityIcons name="calendar" size={22} color="#9CA3AF" />
          <Text className="text-gray-color text-xs font-poppins-regular">
            Release
          </Text>
          <Text className="text-white font-poppins-bold text-sm">
            {formatReleaseDate(release_date)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MediaDetails;
