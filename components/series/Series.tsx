import React from "react";
import SectionHeader from "../SectionHeader";
import Filter from "../Filter";
import type { MediaFilter } from "@/interfaces/api";
import SeriesItems from "./SeriesItems";

const Filters: { label: string; value: MediaFilter }[] = [
  { label: "Popular", value: "popular" },
  { label: "Airing Today", value: "airing_today" },
  { label: "On The Air", value: "on_the_air" },
  { label: "Top Rated", value: "top_rated" },
];
const Series = () => {
  const [filterVal, setFilterVal] = React.useState<MediaFilter>("popular");
  return (
    <>
      <SectionHeader text="Series" showBackButton={true} />
      <Filter
        filters={Filters}
        filterVal={filterVal}
        setFilterVal={setFilterVal}
      />
      <SeriesItems value={filterVal} />
    </>
  );
};

export default Series;
