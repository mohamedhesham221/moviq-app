import { View } from "react-native";
import React from "react";
import Input from "../Input";
import { SearchBarProps } from "@/types/search.types";
const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  
  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
  };
  return (
    <View>
      <Input
        placeholder="Search for movies, TV shows"
        icon="magnify"
        value={searchQuery}
        onChangeText={handleSearchChange}
      />
    </View>
  );
};

export default SearchBar;
