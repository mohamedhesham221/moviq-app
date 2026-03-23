import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { POSTER_SIZE, IMAGE_BASE_URL } from "@/constants/imageURL";
import { useGenres } from "@/hooks/useGenres";

import React from "react";
import { navigateMedia } from "@/utils/navigate";
import BookmarkButton from "./BookmarkButton";
import type { Media } from "@/types/media.types";
type LatestProps = {
  item: Media;
};
const LatestItem = ({ item }: LatestProps) => {
  const { genres } = useGenres("movie");
  const posterPath = `${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`;
  const placeholder = require("../assets/images/No-Image-Placeholder.png");

  const itemGenres = genres.filter((genre) =>
    item.genre_ids?.includes(genre.id),
  );
  return (
    <View className="w-full h-72 mt-8 flex-row gap-4 items-stretch">
      {/**Poster */}
      <ImageBackground
        source={item.poster_path ? { uri: posterPath } : placeholder}
        className="flex-1 rounded-lg relative overflow-hidden"
        resizeMode="cover"
      >
        {/**Bookmark */}
        <BookmarkButton
          id={item.id}
          media_type={item.media_type}
          poster_path={item.poster_path}
          name={item.name}
          title={item.title}
        />
      </ImageBackground>
      {/**Details */}
      <View className="flex-1">
        {/**Title */}
        <TouchableOpacity
          onPress={() =>
            item.title
              ? navigateMedia(item.id, "movie")
              : navigateMedia(item.id, "tv")
          }
        >
          <Text className="text-white text-xl font-poppins-bold">
            {item.title || item.name}
          </Text>
        </TouchableOpacity>
        {/**Rating */}
        <View className="flex-row justify-start items-center gap-2">
          {Number(item.vote_average) === 0.0 ? (
            <>
              <MaterialCommunityIcons
                name="star-outline"
                color="#888888"
                size={20}
              />
              <Text className="text-gray-color text-lg  font-poppins-bold">
                {Number(item.vote_average).toFixed(1)}
              </Text>
            </>
          ) : (
            <>
              <MaterialCommunityIcons name="star" color="#ffc700" size={18} />
              <Text className="text-white text-lg  font-poppins-bold">
                {Number(item.vote_average).toFixed(1)}
              </Text>
            </>
          )}
        </View>
        {/**Genres */}
        <View className="mt-2">
          <Text className="text-gray-color text-xs font-poppins-regular">
            {itemGenres.map((genre) => genre.name).join(", ")}
          </Text>
        </View>
        {/**Overview */}
        <View className="w-full flex-1 mt-6">
          <Text
            className="text-gray-color text-sm font-poppins-regular"
            numberOfLines={6}
          >
            {item.overview}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LatestItem;
