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
import { navigateMedia } from "@/utils/navigate";
import { useAddBookmark } from "@/hooks/useAddBookmark";
const TrendingItem = ({
  title,
  id,
  name,
  vote_average,
  backdrop_path,
  media_type,
  poster_path,
}: Trend) => {
  const { add } = useAddBookmark();
  const placeholder = require("../assets/images/No-Image-Placeholder.png");
  const backdropPath = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`;
  return (
    <View className="space-y-4 w-[300px] mt-4">
      <View className="w-full h-[200px] rounded-xl overflow-hidden mb-4 relative">
        <ImageBackground
          source={backdrop_path ? { uri: backdropPath } : placeholder}
          className="w-full h-full"
          resizeMode={backdrop_path ? "cover" : "contain"}
        >
          <Pressable
            onPress={() => {
              add.mutate({
                mediaId: id,
                mediaType: media_type,
                mediaPoster: poster_path,
                mediaName: name || title,
              });
            }}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
            android_ripple={{ color: "rgba(255,255,255,0.2)" }}
            hitSlop={10}
          >
            <MaterialCommunityIcons
              name="bookmark"
              size={24}
              color="white"
              className="absolute top-2 right-4"
            />
          </Pressable>
        </ImageBackground>
      </View>

      <TouchableOpacity
        onPress={() =>
          title ? navigateMedia(id, "movie") : navigateMedia(id, "tv")
        }
      >
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
