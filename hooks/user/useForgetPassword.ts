import React from "react";
import { forgetPassword } from "@/services/userAuth";
import { ForgetPasswordProps } from "@/constants/authSchema";

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
    } catch (error) {
      setErrorMessage("Failed to send password reset email. Please try again.");
      setIsSuccess(false);
      console.error("Forget Password Error:", error);
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
