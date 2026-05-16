import { Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from "expo-router";
const ResetPassword = () => {
    const { userId, secret } = useLocalSearchParams();

  console.log(userId, secret);

  return (
    <View>
      <Text>resetPassword</Text>
    </View>
  )
}

export default ResetPassword

