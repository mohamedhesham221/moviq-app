import { View, Text } from "react-native";
import React from "react";
import { useUser } from "@/hooks/useUser";
import Divider from "../Divider";

const ProfileHeader = () => {
  const { name, email, error, isLoading } = useUser();

  const fullName =
    name
      ?.split(" ")
      .map((c) => c.charAt(0))
      .join("") || "";

  return (
    <>
      <View className="flex-col justify-center items-center gap-3">
        <View className="bg-highlight-color h-20 w-20 rounded-full justify-center items-center">
          <Text className="text-3xl font-poppins-bold">{fullName}</Text>
        </View>
        <View>
          <Text className="text-white text-lg font-poppins-bold">{name}</Text>
        </View>
        <View>
          <Text className="text-gray-color text-xs font-poppins-regular">
            {email}
          </Text>
        </View>
      </View>
      <Divider />
    </>
  );
};

export default ProfileHeader;
