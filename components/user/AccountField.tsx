import { View, Text, Pressable } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { IconName } from "@/interfaces/icon";
import ModalForm from "./ModalForm";

type AccountFieldProps = {
  icon: IconName;
  title: string;
  type?: "name" | "email" | "password";
};
const AccountField = ({ icon, title, type }: AccountFieldProps) => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [currentType, setCurrentType] = React.useState<
    "name" | "email" | "password"
  >();
  const handlePress = () => {
    setModalVisible((prev) => !prev);
    setCurrentType(type);
  };
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
      <Pressable
        className=" justify-start items-center flex-row gap-4"
        onPress={handlePress}
      >
        <MaterialCommunityIcons
          name={"chevron-right"}
          size={24}
          color="gray"
          className=""
        />
      </Pressable>
      <ModalForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        currentType={currentType}
      />
    </View>
  );
};

export default AccountField;
