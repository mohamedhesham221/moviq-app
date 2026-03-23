import React from "react";
import { useUserSession } from "@/hooks/user/useUserSession";
import Loader from "@/components/Loader";
import { router } from "expo-router";
import { APP_ROUTES } from "@/constants/appRoutes";

export default function Index() {
  const { isUserExist } = useUserSession();

  // check if user still in login session if not redirect user to welcome screen
  React.useEffect(() => {
    if (isUserExist === undefined) return
    router.replace(isUserExist ?  APP_ROUTES.HOME: APP_ROUTES.WELCOME);
  }, [isUserExist]);
  return <Loader />;
}
