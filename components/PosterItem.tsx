import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "@/constants/imageURL";
import GradientComponent from "@/components/GradientComponent";

const PosterItem = ({ poster, title }: { poster: string; title: string }) => {
  const [imgError, setImgError] = React.useState(false);
  const placeholder = require("../assets/images/No-Image-Placeholder.png");
  const imageUrl = `${IMAGE_BASE_URL}${POSTER_SIZE}${poster}`;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{ flex: 1, marginHorizontal: 5 }}
    >
      <ImageBackground
        source={imgError || !poster ? placeholder : { uri: imageUrl }}
        onError={() => setImgError(true)}
        resizeMode={imgError || !poster ? "contain" : "cover"}
        className="w-full rounded-lg bg-[#1f1f1f] justify-end items-center overflow-hidden"
        style={{ aspectRatio: 2 / 3 }}
        imageStyle={{ borderRadius: 8 }}
      >
        <GradientComponent>
          <View className="flex-1 justify-end">
          <Text className="text-white font-poppins-bold text-center mt-1">
            {title}
          </Text>
          </View>
        </GradientComponent>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PosterItem;
