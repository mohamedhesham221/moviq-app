import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View className="w-full min-h-[100vh] flex-1 justify-center items-center bg-black-color">
      <ActivityIndicator size="large" color="#ffc700" />
    </View>
  )
}

export default Loader