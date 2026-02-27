import { getAccount } from "@/services/userAuth";
import { useQuery } from "@tanstack/react-query";
import { Models } from "react-native-appwrite";
export function useUser() {
  const { data, error, isLoading } = useQuery<Models.User>({
    queryKey: ["userAccount"],
    queryFn: getAccount,
    retry: false,
  });
  const email = data?.email;
  const emailVerification = data?.emailVerification;
  const name = data?.name;
  const phone = data?.phone;
  const phoneVerification = data?.phoneVerification;
  return {
    email,
    emailVerification,
    name,
    phone,
    phoneVerification,
    error,
    isLoading,
  };
}
