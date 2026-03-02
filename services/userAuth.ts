import { account } from "./appwrite";
import { ID} from "react-native-appwrite";
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

export const updateEmail = async (email: string) => {
  return await account.updateEmail({ email, password: "current" });
};

export const updateName = async (name: string) => {
  return await account.updateName({ name });
};

export const updatePassword = async (password: string) => {
  return await account.updatePassword({ password, oldPassword: "current" });
};