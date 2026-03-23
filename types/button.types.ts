import { Href } from 'expo-router'

export type AppButtonProps = {
  text: string;
  className?: string;
  onPress?: () => void;
  disabled?: boolean;
};
export type AppLinkProps = {
  text: string;
  className?: string;
  href: Href;
}
export type BookmarkButtonProps = {
  id: number;
  media_type: "tv" | "movie";
  poster_path: string;
  name?: string;
  title?: string;
};

