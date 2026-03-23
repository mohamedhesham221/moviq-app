import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useGetTvDetails } from "@/hooks/series/useGetTvDetails";
import Loader from "@/components/Loader";
import MediaPicture from "@/components/media/MediaPicture";
import ErrorComponent from "@/components/ErrorComponent";
import MediaOverview from "@/components/media/MediaOverview";
import MediaCastWrapper from "@/components/media/MediaCastWrapper";
import { useMediaCast } from "@/hooks/useMediaCast";
import LastEpisode from "@/components/media/LastEpisode";
import Seasons from "@/components/media/Seasons";
import WatchButton from "@/components/media/WatchButton";
import { useVideos } from "@/hooks/useVideos";
import MediaVideo from "@/components/media/Video";

export default function TvDetails() {
  const { id } = useLocalSearchParams();
  const tvID = Number(id);
  const { tv, isLoading, isError } = useGetTvDetails(tvID);
  const { cast } = useMediaCast({ id: tvID, type: "tv" });
  const { videos } = useVideos({ id: tvID, type: "tv" });

  const [visible, setVisible] = React.useState(false);
  const [playing, setPlaying] = React.useState(true);

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
        {tv.last_episode_to_air && (
          <LastEpisode episode={tv.last_episode_to_air} />
        )}
        <Seasons seasons={tv.seasons} />
        <WatchButton setPlaying={setPlaying} setVisible={setVisible} />
        <MediaVideo
          videos={videos}
          onStateChange={onStateChange}
          playing={playing}
          visible={visible}
          setVisible={setVisible}
          setPlaying={setPlaying}
        />
      </View>
    </ScrollView>
  );
}
