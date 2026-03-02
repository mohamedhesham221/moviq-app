import { View} from "react-native";
import React from "react";
import AccountField from "./AccountField";
import { IconName } from "@/interfaces/icon";
type Field = {
  icon: IconName;
  title: string;
};
const fields: Field[] = [
  {
    icon: "rename",
    title: "Edit Name",
  },
  {
    icon: "email",
    title: "Update Email",
  },
  {
    icon: "lock",
    title: "Change Password",
  },
];
const PersonalInfo = () => {
  return <View className="flex-col gap-4">
    {fields.map((field) => (
      <AccountField key={field.title} icon={field.icon} title={field.title} />
    ))}
  </View>;
};

export default PersonalInfo;
