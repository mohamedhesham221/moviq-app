import { Modal, Pressable, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import type { MediaVideoProps } from "@/types/media.types";

const MediaVideo = ({
  video,
  onStateChange,
  visible,
  playing,
  setVisible,
  setPlaying,
}: MediaVideoProps) => {
  const handleClose = React.useCallback(() => {
    setVisible(false);
    setPlaying(false);
  }, [setVisible, setPlaying]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => setVisible(false)}
    >
      <View className="flex-1 bg-black justify-center">
        <Pressable
          onPress={handleClose}
          className="absolute top-12 right-5 z-10"
        >
          <MaterialCommunityIcons name="close" size={32} color="white" />
        </Pressable>
        <YoutubePlayer
          height={220}
          videoId={video.key}
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
