import { View, Text, FlatList } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Loader from "../Loader";
import { useWatchlist } from "@/hooks/useWatchlist";
import ErrorComponent from "../ErrorComponent";
import PosterItem from "../PosterItem";
import SectionHeader from "../SectionHeader";
import { useUser } from "@/hooks/useUser";

const PersonalWatchlist = () => {
  const {userId} = useUser()
  const { bookmarks, isLoading, isError } = useWatchlist(userId);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorComponent />;
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
      <View>
        <SectionHeader text="Watchlist" />
        <FlatList
          data={bookmarks}
          keyExtractor={(item) => item.mediaId.toString()}
          renderItem={({ item }) => (
            <PosterItem
              poster={item.mediaPoster}
              title={item.mediaName}
              id={item.mediaId}
              mediaType={item.mediaType}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "center",
            marginBottom: 16,
          }}
          contentContainerStyle={{
            paddingTop: 15,
          }}
        />
      </View>
    </>
  );
};

export default PersonalWatchlist;
