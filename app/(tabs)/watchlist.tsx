import { View, Text } from "react-native";
import React from "react";
import Protected from "@/components/auth/Protected";

const watchlist = () => {
  return (
    <Protected>
      <View>
        <Text>watchlist</Text>
      </View>
    </Protected>
  );
};

export default watchlist;
