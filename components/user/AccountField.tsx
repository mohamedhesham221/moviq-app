import { View, Text, Pressable } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { IconName } from "@/interfaces/icon";

type AccountFieldProps = {
  icon: IconName;
  title: string;
};
const AccountField = ({ icon, title }: AccountFieldProps) => {
  return (
    <View className="flex-row justify-between items-center gap-2 rounded-lg px-4 py-3 ">
      <View>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color="white"
          className=""
        />
      </View>
      <Text className="flex-grow text-white font-poppins-regular">{title}</Text>
      <Pressable className=" justify-start items-center flex-row gap-4">
        <MaterialCommunityIcons
          name={"chevron-right"}
          size={24}
          color="gray"
          className=""
        />
      </Pressable>
    </View>
  );
};

export default AccountField;
