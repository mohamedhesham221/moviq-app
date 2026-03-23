import { MediaCast } from "@/types/api.types";
import React from "react";
import { FlatList, View } from "react-native";
import SectionHeader from "../SectionHeader";
import ActorProfile from "./ActorProfile";

const MediaCastWrapper = ({ cast }: MediaCast) => {
  return (
    <View className="px-5">
      {!cast.length ? (
        ""
      ) : (
        <>
          <SectionHeader text="Cast" />
          <FlatList
            horizontal
            contentContainerClassName="flex-row gap-5"
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            data={cast}
            renderItem={({ item }) => (
              <ActorProfile
                id={item.id}
                profile_path={item.profile_path}
                name={item.name}
                known_for_department={item.known_for_department}
                character={item.character}
              />
            )}
          />
        </>
      )}
    </View>
  );
};

export default MediaCastWrapper;
