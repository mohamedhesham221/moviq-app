import { View, Text } from "react-native";
import React from "react";
import Input from "../Input";
type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};
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
