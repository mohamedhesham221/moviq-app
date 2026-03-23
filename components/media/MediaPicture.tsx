import { BACKDROP_SIZE, IMAGE_BASE_URL } from "@/constants/imageURL";
import { useAddBookmark } from "@/hooks/bookamrk/useAddBookmark";
import { Genre } from "@/interfaces/api";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import GradientComponent from "../GradientComponent";

type MediaPictureProps = {
  backdropPath: string;
  posterPath: string;
  title?: string;
  name?: string;
  id: number;
  vote_average: string;
  genres: Genre[];
  media_type: "movie" | "tv";
};
const MediaPicture = ({
  backdropPath,
  posterPath,
  title,
  id,
  vote_average,
  genres,
  media_type,
}: MediaPictureProps) => {
  const [imgError, setImgError] = React.useState(false);
  const placeholder = require("../../assets/images/No-Image-Placeholder.png");
  const imgURL = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdropPath}`;
  const { add } = useAddBookmark();

  return (
    <>
      <ImageBackground
        source={imgError || !backdropPath ? placeholder : { uri: imgURL }}
        resizeMode="cover"
        className="w-full h-[450px] bg-[#303030]"
        onError={() => setImgError(true)}
      >
        <GradientComponent startY={1.4}>
          <View className="h-full px-5 flex justify-end relative">
            <Text className="w-[250px] font-poppins-bold text-white text-3xl">
              {title}
            </Text>
            <View className="w-full absolute top-0 px-2 pt-10 flex-row justify-between items-center">
              <Pressable onPress={() => router.back()}>
                <MaterialCommunityIcons
                  name="chevron-left"
                  color="white"
                  size={40}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  add.mutate({
                    mediaId: id,
                    mediaType: media_type,
                    mediaPoster: posterPath,
                    mediaName: title,
                  });
                }}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
                android_ripple={{ color: "rgba(255,255,255,0.2)" }}
                hitSlop={10}
              >
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color="white"
                  size={40}
                />
              </Pressable>
            </View>
          </View>
        </GradientComponent>
      </ImageBackground>
      <View className="gap-2 px-5">
        <View className="flex-row gap-2 items-center">
          <MaterialCommunityIcons name="star" color="#ffc700" size={24} />
          <Text className="text-white text-lg  font-poppins-bold">
            {Number(vote_average).toFixed(1)}
          </Text>
        </View>
        <Text className="text-white text-base font-poppins-regular">
          {genres.map((genre) => genre.name).join(", ")}
        </Text>
      </View>
    </>
  );
};

export default MediaPicture;
