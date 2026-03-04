import { View, Text } from "react-native";
import React from "react";
import AccountField from "./AccountField";
import ProfileHeader from "@/components/user/ProfileHeader";
import Divider from "@/components/Divider";
import LogoutButton from "@/components/user/LogoutButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useUser } from "@/hooks/useUser";
import { IconName } from "@/interfaces/icon";
import Loader from "../Loader";
type Field = {
  icon: IconName;
  title: string;
  fieldType?: "name" | "email" | "password";
};
const fields: Field[] = [
  {
    icon: "rename",
    title: "Edit Name",
    fieldType: "name",
  },
  {
    icon: "email",
    title: "Update Email",
    fieldType: "email",
  },
  {
    icon: "lock",
    title: "Change Password",
    fieldType: "password",
  },
];
const PersonalInfo = () => {
  const { isLoading } = useUser();
  
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <ProfileHeader />
      <View className=" bg-[#080808] px-2 rounded-xl my-6 py-5">
        <View className="flex-row gap-2">
          <MaterialCommunityIcons name="account" color={"#ffc700"} size={24} />
          <Text className="text-highlight-color text-lg font-poppins-bold ">
            Account
          </Text>
        </View>
        <Divider />
        <View className="flex-col gap-4">
          {fields.map((field) => (
            <AccountField
              key={field.title}
              icon={field.icon}
              title={field.title}
              type={field.fieldType}
            />
          ))}
        </View>
      </View>
      <LogoutButton />
    </>
  );
};

export default PersonalInfo;
