import { Text } from 'react-native'
import React from 'react'

const ErrorText = ({ text }: { text: string }) => {
  return (
      <Text className="text-red-500 font-poppins-regular text-center mt-2">{text}</Text>
  )
}

export default ErrorText