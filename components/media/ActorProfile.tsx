import { IMAGE_BASE_URL, PROFILE_SIZE } from "@/constants/imageURL";
import { Cast } from "@/types/api.types";
import React from "react";
import { Image, Text, View } from "react-native";
const ActorProfile = ({
  profile_path,
  name,
  character,
  known_for_department,
}: Cast) => {
  const placeholder = require("../../assets/images/No-Image-Placeholder.png");
  const img = `${IMAGE_BASE_URL}${PROFILE_SIZE}${profile_path}`;
  return (
    <View className="flex-col gap-[2px]  w-32">
      <Image
        className="w-32 h-32 rounded-lg"
        resizeMode="cover"
        source={
          profile_path
            ? {
                uri: img,
              }
            : placeholder
        }
      />
      <Text className="text-white font-poppins-regular text-sm">{name}</Text>
      <Text className="text-gray-color font-poppins-regular text-xs">
        {character}
      </Text>
      <Text className="text-highlight-color font-poppins-bold text-xs ">
        {known_for_department}
      </Text>
    </View>
  );
};

export default ActorProfile;
