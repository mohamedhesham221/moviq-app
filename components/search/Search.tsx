import { View } from "react-native";
import React from "react";
import SearchBar from "@/components/search/SearchBar";
import SearchItems from "./SearchItems";

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState<string>("");
  return (
    <View className="flex-1">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <SearchItems searchQuery={searchQuery} />
    </View>
  );
};

export default Search;
