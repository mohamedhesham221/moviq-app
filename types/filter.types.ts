export type MediaFilter =
  | "now_playing"
  | "upcoming"
  | "popular"
  | "top_rated"
  | "airing_today"
  | "on_the_air";
export type FilterProps = {
  filters: { label: string; value: MediaFilter }[];
  filterVal: MediaFilter;
  setFilterVal: React.Dispatch<React.SetStateAction<MediaFilter>>;
};
export type TrendingFiltersProps = {
  timeframe: "day" | "week";
  setTimeframe: React.Dispatch<React.SetStateAction<"day" | "week">>;
};
