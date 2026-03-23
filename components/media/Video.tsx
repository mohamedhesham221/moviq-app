import { Modal, Pressable, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import { Video } from "@/types/api.types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import type { MediaVideoProps } from "@/types/media.types";

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
