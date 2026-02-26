import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Trend } from "@/interfaces/api";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "@/constants/imageURL";
const TrendingItem = ({
  title,
  id,
  name,
  vote_average,
  backdrop_path,
}: Trend) => {
  return (
    <View className="space-y-4 w-[300px] mt-4">
      <View className="w-full h-[200px] rounded-xl overflow-hidden mb-4 relative">
        <ImageBackground
          source={{ uri: `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}` }}
          className="w-full h-full"
          resizeMode="cover"
        >
          <Pressable onPress={() => console.log(id, "Bookmarked")}>
            <MaterialCommunityIcons
              name="bookmark"
              size={24}
              color="white"
              className="absolute top-2 right-4"
            />
          </Pressable>
        </ImageBackground>
      </View>

      <TouchableOpacity onPress={() => console.log("Item number", id)}>
        <Text className="text-white text-xl font-poppins-bold">
          {title || name}
        </Text>
      </TouchableOpacity>
      <View className="flex-row justify-start items-center gap-2">
        {Number(vote_average) === 0.0 ? (
          <>
            <MaterialCommunityIcons
              name="star-outline"
              color="#888888"
              size={18}
            />
            <Text className="text-gray-color text-lg  font-poppins-bold">
              {Number(vote_average).toFixed(1)}
            </Text>
          </>
        ) : (
          <>
            <MaterialCommunityIcons name="star" color="#ffc700" size={18} />
            <Text className="text-white text-lg  font-poppins-bold">
              {Number(vote_average).toFixed(1)}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

export default TrendingItem;
