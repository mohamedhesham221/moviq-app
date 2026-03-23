import { View, Text, Modal, Pressable } from "react-native";
import React from "react";
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";
import PasswordForm from "./PasswordForm";
import { useUpdateAccount } from "@/hooks/user/useUpdateAccount";

type ModalFormProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  currentType?: "name" | "email" | "password";
};
const ModalForm = ({
  modalVisible,
  setModalVisible,
  currentType,
}: ModalFormProps) => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [currentPassword, setCurrentPassword] = React.useState<string>("");
  const { handleNameSubmit, handleEmailSubmit, handlePasswordSubmit } =
    useUpdateAccount(currentPassword);
  const handleSubmit = () => {
    if (currentType === "name") {
      handleNameSubmit(name, setModalVisible);
    } else if (currentType === "email") {
      handleEmailSubmit(email, setModalVisible);
    } else if (currentType === "password") {
      handlePasswordSubmit(password, setModalVisible);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible((prev) => !prev);
      }}
    >
      <View className="w-full flex-1 justify-center items-center bg-black/50">
        <View className="m-5 bg-field-background rounded-2xl px-5 py-2 items-center shadow-md">
          {currentType === "name" && <NameForm name={name} setName={setName} />}
          {currentType === "email" && (
            <EmailForm
              email={email}
              setEmail={setEmail}
              currentPassword={currentPassword}
              setCurrentPassword={setCurrentPassword}
            />
          )}
          {currentType === "password" && (
            <PasswordForm
              password={password}
              setPassword={setPassword}
              currentPassword={currentPassword}
              setCurrentPassword={setCurrentPassword}
            />
          )}
          <View className="w-full flex-row gap-4 justify-end items-center mt-3">
            <Pressable onPress={() => setModalVisible((prev) => !prev)}>
              <Text className="text-red-500 font-poppins-bold">Close</Text>
            </Pressable>
            <Pressable onPress={handleSubmit}>
              <Text className="text-highlight-color font-poppins-bold">
                Submit
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalForm;
