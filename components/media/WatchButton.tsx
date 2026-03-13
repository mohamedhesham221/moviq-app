import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type ButtonProps = {
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const WatchButton = ({ setVisible, setPlaying }: ButtonProps) => {
  return (
    <View className="px-5">
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          setVisible(true);
          setPlaying(true);
        }}
        className="mt-5 w-full bg-highlight-color rounded-lg py-2"
      >
        <Text className="text-black-color font-poppins-bold text-center">
          Watch Trailer
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WatchButton;
