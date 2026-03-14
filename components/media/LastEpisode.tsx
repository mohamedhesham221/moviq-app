import { View, Text, Image } from "react-native";
import React from "react";
import { Episode } from "@/interfaces/api";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "@/constants/imageURL";
import SectionHeader from "../SectionHeader";
import { formatReleaseDate } from "@/utils/format";
type LastEpisodeProps = {
  episode: Episode;
};
const LastEpisode = ({ episode }: LastEpisodeProps) => {
  const placeholder = require("../../assets/images/No-Image-Placeholder.png");
  const imgURL = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${episode.still_path}`;

  return (
    <View className="pt-10 px-5">
      <SectionHeader text="Last Episode" />
      <View className="w-full flex-col gap-4 mt-3">
        {/* Image */}
        <Image
          className="h-40 rounded-xl"
          resizeMode={episode.still_path? "cover": "contain"}
          source={
            episode.still_path
              ? {
                  uri: imgURL,
                }
              : placeholder
          }
        />

        {/* Content */}
        <View className="flex-1">
          <Text
            numberOfLines={2}
            className="text-white text-lg font-poppins-bold"
          >
            {episode.name}
          </Text>

          <Text
            numberOfLines={3}
            className="text-gray-color text-sm font-poppins-regular mt-1"
          >
            {episode.overview}
          </Text>

          <View className="flex-row gap-3 mt-2">
            <Text className="text-highlight-color text-xs">
              S{episode.season_number}
            </Text>

            <Text className="text-highlight-color text-xs">
              E{episode.episode_number}
            </Text>

            <Text className="text-highlight-color text-xs">
              {episode.runtime ?? "-"}m
            </Text>
          </View>

          <Text className="text-white text-xs mt-1">
            {formatReleaseDate(episode.air_date)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LastEpisode;
