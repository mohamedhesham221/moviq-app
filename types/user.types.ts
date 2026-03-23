import type { IconName } from "./icon.types";
export interface RegisterProps {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
export type AccountFieldProps = {
  icon: IconName;
  title: string;
  type?: "name" | "email" | "password";
};
export type EmailFormProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  currentPassword: string;
  setCurrentPassword: React.Dispatch<React.SetStateAction<string>>;
};
export type ModalFormProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  currentType?: "name" | "email" | "password";
};
export type NameFormProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};
export type PasswordFormProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  currentPassword: string;
  setCurrentPassword: React.Dispatch<React.SetStateAction<string>>;
};
export type Field = {
  icon: IconName;
  title: string;
  fieldType?: "name" | "email" | "password";
};
