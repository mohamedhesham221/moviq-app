import { useMutation } from "@tanstack/react-query";
import { updateEmail, updateName, updatePassword } from "@/services/userAuth";
import { Alert } from "react-native";
export function useUpdateAccount(currentPassword: string) {
  //update name
  const updateNameMutation = useMutation({
    mutationFn: (name: string) => updateName(name),
  });
  //update email
  const updateEmailMutation = useMutation({
    mutationFn: ({
      email,
      password = currentPassword,
    }: {
      email: string;
      password: string;
    }) => updateEmail(email, password),
  });
  //update password
  const updatePasswordMutation = useMutation({
    mutationFn: ({
      password,
      oldPassword = currentPassword,
    }: {
      password: string;
      oldPassword: string;
    }) => updatePassword(password, oldPassword),
  });
//
  const handleNameSubmit = (
    name: string,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  ): void => {
    updateNameMutation.mutate(name, {
      onSuccess: () => {
        Alert.alert("Success", "Name updated successfully");
        setModalVisible(false);
      },
      onError: (error) => {
        console.log("Error", error);
        Alert.alert("Error", "Failed to update name");
      },
    });
  };
  const handleEmailSubmit = (
    email: string,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  ): void => {
    updateEmailMutation.mutate({email, password: currentPassword}, {
      onSuccess: () => {
        Alert.alert("Success", "Email updated successfully");
        setModalVisible(false);
      },
      onError: (error) => {
        console.log("Error", error);
        Alert.alert("Error", "Failed to update email");
      },
    });
  };
  const handlePasswordSubmit = (
    password: string,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  ): void => {
    updatePasswordMutation.mutate({password, oldPassword: currentPassword}, {
      onSuccess: () => {
        Alert.alert("Success", "Password updated successfully");
        setModalVisible(false);
      },
      onError: (error) => {
        console.log("Error", error);
        Alert.alert("Error", "Failed to update password");
      },
    });
  };
  
  return {
    handleNameSubmit,
    handleEmailSubmit,
    handlePasswordSubmit,
  };
}
