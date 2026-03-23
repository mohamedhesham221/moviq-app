import { router } from "expo-router";
import { APP_ROUTES } from "@/constants/appRoutes";
import { getAccount } from "@/services/userAuth";
import React from "react";
export function useUserSession() {
  const [isUserExist, setIsUserExist] = React.useState(false)
  const toSignUp = () => {
    router.push(APP_ROUTES.LOGIN);
  };
  async function activeSession() {
    try {
      await getAccount();
      return setIsUserExist(true);
    } catch {
      return setIsUserExist(false);
    }
  }
  activeSession();
  return { toSignUp, isUserExist };
}
