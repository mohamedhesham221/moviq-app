import type { FilterProps } from "@/types/filter.types";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
const Filter = ({ filters, filterVal, setFilterVal }: FilterProps) => {
  return (
    <View className="flex-row  items-center gap-4 mb-2">
      <FlatList
        data={filters}
        keyExtractor={(item) => item.value}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setFilterVal(item.value)}
            className={`rounded-full px-4 py-1 mr-2 ${
              filterVal === item.value
                ? "bg-highlight-color"
                : "bg-chip-background"
            }`}
          >
            <Text
              className={`text-md font-poppins-regular ${
                filterVal === item.value ? "text-black-color" : "text-white"
              }`}
            >
              {item.label}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Filter;
