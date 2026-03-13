import { View, Modal, Pressable } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import React from "react";
import { Video } from "@/interfaces/api";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type MediaVideoProps = {
  videos: Video[];
  onStateChange: (state: string) => void;
  visible: boolean;
  playing: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};
const MediaVideo = ({
  videos,
  onStateChange,
  visible,
  playing,
  setVisible,
  setPlaying,
}: MediaVideoProps) => {
  const trailer = videos.find(
    (v: Video) => v.site === "YouTube" && v.type === "Trailer",
  );
  return (
    <Modal visible={visible} animationType="slide">
      <View className="flex-1 bg-black justify-center">
        <Pressable
          onPress={() => {
            setVisible(false);
            setPlaying(false);
          }}
          className="absolute top-12 right-5 z-10"
        >
          <MaterialCommunityIcons name="close" size={32} color="white" />
        </Pressable>
        <YoutubePlayer
          height={220}
          videoId={trailer?.key}
          play={playing}
          initialPlayerParams={{
            controls: true,
            modestbranding: true,
          }}
          onChangeState={onStateChange}
        />
      </View>
    </Modal>
  );
};

export default MediaVideo;
