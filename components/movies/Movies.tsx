import React from "react";
import SectionHeader from "../SectionHeader";
import Filter from "../Filter";
import type { MediaFilter } from "@/interfaces/api";
import MoviesItems from "./MoviesItems";


const Filters: { label: string; value: MediaFilter }[] = [
    { label: "Popular", value: "popular" },
  { label: "Now Playing", value: "now_playing" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Top Rated", value: "top_rated" },
];
const Movies = () => {
  const [filterVal, setFilterVal] = React.useState<MediaFilter>("popular");
  
  return (
    <>
      <SectionHeader text="Movies" showBackButton={true} />
      <Filter
        filters={Filters}
        filterVal={filterVal}
        setFilterVal={setFilterVal}
      />
      <MoviesItems value={filterVal} />
    </>
  );
};

export default Movies;
