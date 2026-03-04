import { View, Text } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useUser } from "@/hooks/useUser";
import Loader from "../Loader";

const PersonalWatchlist = () => {
  const { isLoading } = useUser();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <MaterialCommunityIcons
        name="playlist-remove"
        size={50}
        color="#888888"
        className="mt-5 self-center"
      />
      <Text className="text-highlight-color text-xl text-center font-poppins-bold">
        Your Watchlist is empty
      </Text>
    </>
  );
};

export default PersonalWatchlist;
