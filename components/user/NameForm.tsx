import React from "react";
import Input from "../Input";
type NameFormProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};
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
