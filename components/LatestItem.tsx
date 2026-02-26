import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { POSTER_SIZE, IMAGE_BASE_URL } from "@/constants/imageURL";
import { useGenres } from "@/hooks/useGenres";

import React from "react";
type Media = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  overview: string;
  vote_average: string;
  genre_ids?: number[]
};
type LatestProps = {
  item: Media;
};
const LatestItem = ({ item }: LatestProps) => {
    const {genres} = useGenres('movie');
  console.log("Genres List",genres);
  console.log("Genres Item", item.genre_ids);
  
  return (
    <View className="w-full h-72 mt-8 flex-row gap-4 items-stretch">
      {/**Poster */}
        <ImageBackground
          source={{ uri: `${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}` }}
          className="flex-1 rounded-lg relative overflow-hidden"
          resizeMode="cover"
        >
          {/**Bookmark */}
          <Pressable onPress={() => console.log(item.id, "Bookmarked")}>
            <MaterialCommunityIcons
              name="bookmark"
              size={24}
              color="white"
              className="absolute top-2 right-4"
            />
          </Pressable>
        </ImageBackground>
      {/**Details */}
      <View className="flex-1">
        {/**Title */}
        <TouchableOpacity onPress={() => console.log("Item number", item.id)}>
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
              <MaterialCommunityIcons name="star" color="#ffc700" size={20} />
              <Text className="text-white text-lg  font-poppins-bold">
                {Number(item.vote_average).toFixed(1)}
              </Text>
            </>
          )}
        </View>
        {/**Genres */}
        <View className="w-3/4 h-4 bg-skeleton-background rounded mt-2" />
        {/**Overview */}
        <View className="w-full flex-1 mt-6">
          <Text
            className="text-gray-color text-sm  font-poppins-regular"
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
