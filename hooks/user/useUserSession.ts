import { router } from "expo-router";
import { APP_ROUTES } from "@/constants/appRoutes";
import { getAccount } from "@/services/userAuth";
import React from "react";
export function useUserSession() {
  const [isUserExist, setIsUserExist] = React.useState<boolean | undefined>(undefined)
  const toSignUp = () => {
    router.push(APP_ROUTES.LOGIN);
  };
  React.useEffect(() => {
    const activeSession = async () => {
      try {
        await getAccount();
        setIsUserExist(true);
      } catch {
        setIsUserExist(false);
      }
    };

    activeSession();
  }, []);
  return { toSignUp, isUserExist };
}
