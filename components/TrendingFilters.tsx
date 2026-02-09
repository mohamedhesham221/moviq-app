import { View, Text, Pressable } from 'react-native'
import React from 'react'

  const trendingFilters = [
    { label: "Today", value: "day" },
    { label: "This Week", value: "week" },
  ] as const;

  interface TrendingFiltersProps {
    timeframe: "day" | "week";
    setTimeframe: React.Dispatch<React.SetStateAction<"day" | "week">>;
  }
const TrendingFilters = ({ timeframe, setTimeframe }: TrendingFiltersProps) => {
    
  return (
    <View className="flex-row justify-center items-center gap-4 mb-2">
        {trendingFilters.map((filter) => (
          <Pressable
            key={filter.value}
            className={`text-lg font-poppins-regular rounded-full px-4 py-1 ${timeframe === filter.value ? "text-black-color bg-highlight-color" : "text-white bg-chip-background "}`}
            onPress={() => setTimeframe(filter.value as "day" | "week")}
          >
            <Text
              className={`text-lg font-poppins-regular ${timeframe === filter.value ? "text-black-color" : "text-white"}`}
            >
              {filter.label}
            </Text>
          </Pressable>
        ))}
      </View>
  )
}

export default TrendingFilters