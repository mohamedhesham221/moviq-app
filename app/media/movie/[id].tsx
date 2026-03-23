import ErrorComponent from "@/components/ErrorComponent";
import Loader from "@/components/Loader";
import MediaCastWrapper from "@/components/media/MediaCastWrapper";
import MediaDetails from "@/components/media/MediaDetails";
import MediaOverview from "@/components/media/MediaOverview";
import MediaPicture from "@/components/media/MediaPicture";
import MediaVideo from "@/components/media/Video";
import WatchButton from "@/components/media/WatchButton";
import { useGetMovieDetails } from "@/hooks/movies/useGetMovieDetails";
import { useMediaCast } from "@/hooks/useMediaCast";
import { useVideos } from "@/hooks/useVideos";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
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
