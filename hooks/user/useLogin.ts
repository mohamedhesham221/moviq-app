import React from "react";
import { router } from "expo-router";
import { loginToAccount } from "@/services/userAuth";
import { LoginProps } from "@/constants/authSchema";
export function useLogin() {
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);


  {/**redirect to home screen if login success after 1.5s to ensure response in appwrite success  */}
  const handleLogin = async (data: LoginProps, reset: () => void) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      await loginToAccount(data);
      setIsSuccess(true);
      setErrorMessage("");
      reset();
      setTimeout(() => {
        router.push("/home");
      }, 1500);
    } catch (error) {
      setErrorMessage("Invalid credentials, Email or password is incorrect.");
      setIsSuccess(false);
      console.error("Login Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    errorMessage,
    isLoading,
    isSuccess,
    handleLogin,
  };
}
