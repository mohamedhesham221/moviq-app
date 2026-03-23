import GradientComponent from "@/components/GradientComponent";
import { IMAGE_BASE_URL, POSTER_SIZE } from "@/constants/imageURL";
import { Season } from "@/types/api.types";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import SeasonModal from "./SeasonModal";

type SeasonItemProps = {
  season: Season;
};
const SeasonItem = ({ season }: SeasonItemProps) => {
  const [imgError, setImgError] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const placeholder = require("../../assets/images/No-Image-Placeholder.png");
  const imageUrl = `${IMAGE_BASE_URL}${POSTER_SIZE}${season.poster_path}`;

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        className="rounded-lg overflow-hidden"
        onPress={() => setVisible(true)}
      >
        <ImageBackground
          source={
            imgError || !season.poster_path ? placeholder : { uri: imageUrl }
          }
          onError={() => setImgError(true)}
          resizeMode={imgError || !season.poster_path ? "contain" : "cover"}
          className="w-48 h-52"
        >
          <GradientComponent startY={1.3}>
            <View className="flex-1 justify-end">
              <Text className="text-white font-poppins-bold text-center mt-1">
                {season.name}
              </Text>
            </View>
          </GradientComponent>
        </ImageBackground>
      </TouchableOpacity>
      <SeasonModal visible={visible} setVisible={setVisible} season={season} />
    </>
  );
};

export default SeasonItem;
