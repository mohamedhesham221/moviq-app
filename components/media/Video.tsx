import { Modal, Pressable, View, Image, Animated } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import type { MediaVideoProps } from "@/types/media.types";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "@/constants/imageURL";
import { usePulse } from "@/hooks/usePulse";

const MediaVideo = ({
  video,
  backdrop,
  onStateChange,
  onPlayerReady,
  visible,
  playing,
  isReady,
  setVisible,
  setPlaying,
  setIsReady,
}: MediaVideoProps) => {
  const opacity = usePulse();
  const imgURL = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}`;
  const handleClose = React.useCallback(() => {
    setVisible(false);
    setPlaying(false);
    setIsReady(false);
  }, [setVisible, setPlaying, setIsReady]);
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={handleClose}>
      <View className="flex-1 bg-black justify-center">
        <Pressable
          onPress={handleClose}
          className="absolute top-12 right-5 z-10"
        >
          <MaterialCommunityIcons name="close" size={32} color="white" />
        </Pressable>

        {/* Wrapper to stack player and placeholder */}
        <View className="w-full h-[220px]">
          {/* Player always mounted so onReady can fire */}
          <YoutubePlayer
            height={220}
            videoId={video.key}
            play={playing}
            initialPlayerParams={{
              controls: true,
              modestbranding: true,
            }}
            onChangeState={onStateChange}
            onReady={onPlayerReady}
          />

          {/* Placeholder covers the player until onReady fires */}
          {!isReady && (
            <Animated.View
              style={{
                opacity,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Image
                source={{ uri: imgURL }}
                blurRadius={10}
                className="w-full h-full"
              />
            </Animated.View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default MediaVideo;
