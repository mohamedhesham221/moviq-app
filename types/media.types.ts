import { Genre, Season, Video } from "./api.types";
export type Media = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  media_type: "movie" | "tv";
  overview: string;
  vote_average: string;
  genre_ids?: number[];
};

export type MediaPictureProps = {
  backdropPath: string;
  posterPath: string;
  title?: string;
  name?: string;
  id: number;
  vote_average: string;
  genres: Genre[];
  media_type: "movie" | "tv";
};
export type SeasonModalProps = {
  season: Season;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export type MediaVideoProps = {
  videos: Video[];
  onStateChange: (state: string) => void;
  visible: boolean;
  playing: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ButtonProps = {
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
