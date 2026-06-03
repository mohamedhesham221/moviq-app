import { resetPassword } from "@/services/userAuth";
import { useRouter } from "expo-router";
import React from "react";

export default function useResetPassword() {
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const router = useRouter();
  const handleResetPassword = async (
    userId: string,
    secret: string,
    password: string,
    reset: () => void,
  ) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      if (password.length < 8) {
        setErrorMessage("Password must be at least 8 characters.");
        return;
      }
      await resetPassword(userId, secret, password);
      setIsSuccess(true);
      setErrorMessage("");
      reset();
      setTimeout(() => router.replace("/login"), 1500)
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
