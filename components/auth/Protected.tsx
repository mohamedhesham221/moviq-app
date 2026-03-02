import React from "react";
import { getAccount } from "@/services/userAuth";
import { Redirect, router } from "expo-router";
import { APP_ROUTES } from "@/constants/appRoutes";

type ProtectedProps = {
  children: React.ReactNode;
};
const Protected = ({ children }: ProtectedProps) => {
  const checkAuth = async () => {
    try {
      const account = await getAccount();
      console.log("Current Account", account);
    } catch (error) {
        console.log("Account Error", error);
        router.replace(APP_ROUTES.LOGIN);
    }
  };
  checkAuth();
  return children;
};

export default Protected;
