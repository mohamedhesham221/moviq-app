import React from "react";
import { router } from "expo-router";
import { createAccount } from "@/services/userAuth";
import { RegisterProps } from "@/constants/authSchema";
export function useRegister() {
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);


  const handleRegister = async (data: RegisterProps, reset: () => void) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      await createAccount(data);
      setIsSuccess(true);
      setErrorMessage("");
      reset();
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error) {
      setErrorMessage("Failed to create account. Please try again.");
      setIsSuccess(false);
      throw new Error(error instanceof Error ? error.message : String(error));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    errorMessage,
    isLoading,
    isSuccess,
    handleRegister,
  };
}
