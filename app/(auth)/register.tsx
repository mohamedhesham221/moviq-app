import AppButton from "@/components/AppButton";
import AppLink from "@/components/AppLink";
import AuthText from "@/components/auth/AuthText";
import ErrorText from "@/components/auth/ErrorText";
import LoadingText from "@/components/auth/LoadingText";
import SuccessText from "@/components/auth/SuccessText";
import Input from "@/components/Input";
import { RegisterProps, registerSchema } from "@/constants/authSchema";
import { useRegister } from "@/hooks/useRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
{
  /**Register Screen
   * use KeyboardAwareScrollView to handle keyboard avoiding view
   * uses react-hook-form and yup for form handling and validation
   * Fields: name, email, password, confirm password
   * Button: Register
   * Link: Already have an account? Sign In
   * Displays error messages for validation and registration failures
   * Displays success message on successful registration
   * Displays loading indicator during registration process
   */
}
const Register = () => {
  const { errorMessage, isLoading, isSuccess, handleRegister } = useRegister();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (formData: RegisterProps) => {
    await handleRegister(formData, () => reset());
  };
  return (
    <KeyboardAwareScrollView
      className="bg-black-color w-full h-full px-5 pb-14 gap-2"
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      enableOnAndroid={true}
      extraScrollHeight={25}
      keyboardShouldPersistTaps="handled"
    >
      <AuthText
        text="Create Account"
        className="text-white font-poppins-bold text-xl"
      />
      <AuthText
        text="Create your account to get started and enjoy a seamless experience."
        className="text-gray-color font-poppins-regular text-sm text-center mb-4"
      />
      <View className="w-full gap-4">
        {/**name field */}
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon="account"
              placeholder="name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.name && (
          <Text className="text-red-500">{errors.name?.message}</Text>
        )}
        {/**email field */}
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon="email"
              placeholder="email"
              keyboardType="email-address"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.email && (
          <Text className="text-red-500">{errors.email?.message}</Text>
        )}
        {/**password field */}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon="lock"
              placeholder="password"
              secureTextEntry={true}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.password && (
          <Text className="text-red-500">{errors.password?.message}</Text>
        )}
        {/**confirm password field */}
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon="lock-check"
              placeholder="confirm password"
              secureTextEntry={true}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.confirmPassword && (
          <Text className="text-red-500">
            {errors.confirmPassword?.message}
          </Text>
        )}
        {/**register button */}
        <AppButton
          text="Register"
          className="rounded-lg"
          disabled={isLoading}
          onPress={() => {
            handleSubmit(onSubmit)();
          }}
        />
        {/**loading indicator */}
        {isLoading && <LoadingText text="Creating your account..." />}
        {/**error message if registration fails */}
        {!isLoading && errorMessage?.length > 0 && !isSuccess && (
          <ErrorText text={errorMessage} />
        )}
        {/**success message if registration succeeds */}
        {!isLoading && !errorMessage?.length && isSuccess && (
          <SuccessText text="Account created successfully!." />
        )}

        {/**link to login */}
        <AppLink text="Already have an account? Sign In" href="/login" />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;
