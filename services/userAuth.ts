import { account } from "./appwrite";
import { ID, Models } from "react-native-appwrite";
import type { RegisterProps, LoginProps } from "@/constants/authSchema";

export const createAccount = async ({ email, password, name }: RegisterProps) => {
  return await account.create({ userId: ID.unique(), email, password, name });
};

export const loginToAccount = async ({ email, password }: LoginProps) => {
  return await account.createEmailPasswordSession({ email, password });
};

export const getAccount = async () => {
  return await account.get();
};

export const logout = async () => {
  return await account.deleteSession({ sessionId: "current" });
};