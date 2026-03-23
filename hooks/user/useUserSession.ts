import { router } from "expo-router";
import { APP_ROUTES } from "@/constants/appRoutes";
import { getAccount } from "@/services/userAuth";

export function useUserSession() {
  const toSignUp = () => {
    router.push(APP_ROUTES.REGISTER);
  };

  async function activeSession(): Promise<void> {
    try {
      const res = await getAccount();
      if (res) {
        router.replace(APP_ROUTES.HOME);
      } else {
        router.replace("/")
      }
    } catch (error) {
      console.log("Error checking session:", error);
    }
  }
  return { toSignUp, activeSession };
};