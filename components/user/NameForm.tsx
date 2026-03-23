import React from "react";
import Input from "../Input";
import type { NameFormProps } from "@/types/user.types";
const NameForm = ({ name, setName }: NameFormProps) => {
  const handleNameChange = (text: string) => {
    setName(text);
  };
  return (
    <Input
      placeholder="Enter your new name"
      icon="rename"
      value={name}
      onChangeText={handleNameChange}
    />
  );
};

export default NameForm;
