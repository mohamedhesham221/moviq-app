import React from "react";
import ErrorComponent from "@/components/ErrorComponent";
import Loader from "@/components/Loader";
import LastEpisode from "@/components/media/LastEpisode";
import MediaCastWrapper from "@/components/media/MediaCastWrapper";
import MediaOverview from "@/components/media/MediaOverview";
import MediaPicture from "@/components/media/MediaPicture";
import Seasons from "@/components/media/Seasons";
import MediaVideo from "@/components/media/Video";
import WatchButton from "@/components/media/WatchButton";
import { useGetTvDetails } from "@/hooks/series/useGetTvDetails";
import { useMediaCast } from "@/hooks/useMediaCast";
import { useVideos } from "@/hooks/useVideos";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, View, Text } from "react-native";
export default function TvDetails() {
  const { id } = useLocalSearchParams();
  const tvID = Number(id);
  const { tv, isLoading, isError } = useGetTvDetails(tvID);
  const { cast } = useMediaCast({ id: tvID, type: "tv" });
  const { trailer } = useVideos({ id: tvID, type: "tv" });
  const [visible, setVisible] = React.useState<boolean>(false);
  const [playing, setPlaying] = React.useState<boolean>(false);
  const [isReady, setIsReady] = React.useState<boolean>(false);

  //Hide placeholder after video is ready
  const onPlayerReady = React.useCallback(() => {
    setIsReady(true);
  }, [setIsReady]);

  //Stop playing video when video modal closed
  const onStateChange = React.useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  if (isLoading) return <Loader />;
  if (isError || !tv) return <ErrorComponent />;
  return (
    <ScrollView>
      <View className="pb-10">
        <MediaPicture
          backdropPath={tv.backdrop_path}
          id={tv.id}
          title={tv.name}
          genres={tv.genres}
          vote_average={tv.vote_average}
          posterPath={tv.poster_path}
          media_type="tv"
        />
        <MediaOverview overview={tv.overview} />
        <MediaCastWrapper cast={cast} />
        <LastEpisode episode={tv.last_episode_to_air} />
        <Seasons seasons={tv.seasons} />
        {trailer ? (
          <>
            <WatchButton setPlaying={setPlaying} setVisible={setVisible} />
            <MediaVideo
              video={trailer}
              backdrop={tv.backdrop_path}
              onStateChange={onStateChange}
              onPlayerReady={onPlayerReady}
              playing={playing}
              visible={visible}
              isReady={isReady}
              setVisible={setVisible}
              setPlaying={setPlaying}
              setIsReady={setIsReady}
            />
          </>
        ) : (
          <View className="px-5 mt-5 w-full rounded-lg py-2">
            <Text className="text-highlight-color font-poppins-bold text-center">
              No Trailer Available
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
