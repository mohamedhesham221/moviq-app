import { useUser } from "@/hooks/user/useUser";
import { useWatchlist } from "@/hooks/useWatchlist";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { FlatList, Text, View } from "react-native";
import ErrorComponent from "../ErrorComponent";
import Loader from "../Loader";
import SectionHeader from "../SectionHeader";
import WatchlistItem from "./WatchlistItem";

const PersonalWatchlist = () => {
  const { userId } = useUser();
  const { bookmarks, isLoading, isError } = useWatchlist(userId);
  if (isLoading) return <Loader />;
  if (isError) return <ErrorComponent />;
  //if bookmark empty
  if (bookmarks.length === 0)
    return (
      <>
        <View>
          <MaterialCommunityIcons
            name="playlist-remove"
            size={50}
            color="#888888"
            className="mt-5 self-center"
          />

          <Text className="text-highlight-color text-xl text-center font-poppins-bold">
            Your Watchlist is empty
          </Text>
        </View>
      </>
    );
  return (
    <>
      <SectionHeader text="Watchlist" />
      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item.mediaId.toString()}
        renderItem={({ item }) => <WatchlistItem item={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "center",
          marginBottom: 16,
        }}
        contentContainerStyle={{
          paddingTop: 15,
        }}
      />
    </>
  );
};

export default PersonalWatchlist;
