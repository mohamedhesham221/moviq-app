import { View, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useGetMovieDetails } from "@/hooks/movies/useGetMovieDetails";
import Loader from "@/components/Loader";
import MediaPicture from "@/components/media/MediaPicture";
import ErrorComponent from "@/components/ErrorComponent";
import MediaOverview from "@/components/media/MediaOverview";
import MediaCastWrapper from "@/components/media/MediaCastWrapper";
import { useMediaCast } from "@/hooks/useMediaCast";
import MediaDetails from "@/components/media/MediaDetails";
import { useVideos } from "@/hooks/useVideos";
import MediaVideo from "@/components/media/Video";
import WatchButton from "@/components/media/WatchButton";
export default function MovieDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const movieID = Number(id);
  const { movie, isLoading, isError } = useGetMovieDetails(movieID);
  const { cast } = useMediaCast({ id: movieID, type: "movie" });
  const { videos } = useVideos({ id: movieID, type: "movie" });
  const [visible, setVisible] = React.useState(false);
  const [playing, setPlaying] = React.useState(true);
  const onStateChange = React.useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  if (isLoading) return <Loader />;
  if (isError || !movie) return <ErrorComponent />;

  return (
    <ScrollView>
      <View className="pb-10">
        <MediaPicture
          backdropPath={movie.backdrop_path}
          id={movie.id}
          title={movie.title}
          genres={movie.genres}
          vote_average={movie.vote_average}
          posterPath={movie.poster_path}
          media_type="movie"
        />
        <MediaOverview overview={movie.overview} />
        <MediaCastWrapper cast={cast} />
        <MediaDetails
          release_date={movie.release_date}
          revenue={movie.revenue}
          runtime={movie.runtime}
          tagline={movie.tagline}
        />
        <WatchButton setVisible={setVisible} setPlaying={setPlaying} />
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
