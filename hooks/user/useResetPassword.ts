import { resetPassword } from "@/services/userAuth";
import React from "react";

export default function useResetPassword() {
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  
  const handleResetPassword = async (
    userId: string,
    secret: string,
    password: string,
    reset: () => void,
  ) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      await resetPassword(userId, secret, password);
      setIsSuccess(true);
      setErrorMessage("");
      reset();
    } catch (error) {
      setErrorMessage("Failed to reset password. Please try again.");
      setIsSuccess(false);
      console.error("Reset Password Error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    handleResetPassword,
    errorMessage,
    setErrorMessage,
    isLoading,
    isSuccess,
  };
}
