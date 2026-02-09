import AppButton from "@/components/AppButton";
import AppLink from "@/components/AppLink";
import AuthText from "@/components/auth/AuthText";
import ErrorText from "@/components/auth/ErrorText";
import LoadingText from "@/components/auth/LoadingText";
import SuccessText from "@/components/auth/SuccessText";
import Input from "@/components/Input";
import { LoginProps, loginSchema } from "@/constants/authSchema";
import { useLogin } from "@/hooks/useLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

{
  /**Login Screen
   * use KeyboardAwareScrollView to handle keyboard avoiding view
   * uses react-hook-form and yup for form handling and validation
   * Fields: email, password
   * Button: Login
   * Link: if you don't have an account? Sign Up
   * Displays error messages for validation and registration failures
   * Displays success message on successful registration
   * Displays loading indicator during registration process
   */
}
const Login = () => {
  const { errorMessage, isLoading, isSuccess, handleLogin } = useLogin();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (formData: LoginProps) => {
    await handleLogin(formData, () => reset());
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
        text="Login to Your Account"
        className="text-white font-poppins-bold text-xl"
      />
      <AuthText
        text="Please login to your account to continue enjoying our services."
        className="text-gray-color font-poppins-regular text-sm text-center mb-4"
      />
      <View className="w-full gap-4">
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
        {/**Login button */}
        <AppButton
          text="Login"
          className="rounded-lg"
          disabled={isLoading}
          onPress={() => {
            handleSubmit(onSubmit)();
          }}
        />
        {/**loading indicator */}
        {isLoading && <LoadingText text="Logging in..." />}
        {/**error message if login fails */}
        {!isLoading && errorMessage?.length > 0 && !isSuccess && (
          <ErrorText text={errorMessage} />
        )}
        {/**success message if login succeeds */}
        {!isLoading && !errorMessage?.length && isSuccess && (
          <SuccessText text="Login successful!." />
        )}

        {/**link to register */}
        <AppLink
          text="if you don't have an account? Sign Up"
          href="/register"
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
