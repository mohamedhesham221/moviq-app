import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
export default function TvDetails() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>
        Media:- tv - {id}
      </Text>
    </View>
  );
}
