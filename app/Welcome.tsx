import AppButton from "@/components/AppButton";
import AppLink from "@/components/AppLink";
import { Text, View, ImageBackground } from "react-native";
import GradientComponent from "@/components/GradientComponent";
import React from "react";
import { APP_ROUTES } from "@/constants/appRoutes";
import { useUserSession } from "@/hooks/user/useUserSession";

export default function Welcome() {
  const { toSignUp } = useUserSession();

  return (
    <ImageBackground
      source={require("../assets/images/movies-bg.png")}
      className="flex-1 justify-center items-center"
    >
      <GradientComponent startY={1}>
        <View className="w-full  flex-1 justify-end items-center px-5 pb-10">
          <Text className="text-white text-2xl font-poppins-bold p-5 rounded-xl ">
            welcome to moviQ
          </Text>
          <Text className="text-gray-color text-md font-poppins-regular text-center mb-10">
            Explore a hundred of trendy and popular movies and TV shows.
          </Text>
          <View className="w-full space-y-4 justify-center items-center">
            <AppButton
              text="Login to your Account"
              className="rounded-full"
              onPress={toSignUp}
            />
            <AppLink text="I'll pass this time" href={APP_ROUTES.HOME} />
          </View>
        </View>
      </GradientComponent>
    </ImageBackground>
  );
}
