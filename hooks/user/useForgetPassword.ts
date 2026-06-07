import React from "react";
import { forgetPassword } from "@/services/userAuth";
import { ForgetPasswordProps } from "@/constants/authSchema";
import { router } from "expo-router";

export default function useForgetPassword() {
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const handleForgetPassword = async (
    data: ForgetPasswordProps,
    reset: () => void,
  ) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      await forgetPassword(data.email);
      setIsSuccess(true);
      setErrorMessage("");
      reset();
      setTimeout(() => {
        router.replace("/login");
      }, 3000);
    } catch (error) {
      console.error("Forget Password Error:", error);
      setErrorMessage("Failed to send password reset email. Please try again.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    handleForgetPassword,
    errorMessage,
    isLoading,
    isSuccess,
  };
}
