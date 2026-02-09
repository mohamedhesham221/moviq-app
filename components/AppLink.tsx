import { View, Text} from 'react-native'
import { Link, Href } from 'expo-router'
import React from 'react'

type AppLinkProps = {
  text: string;
  className?: string;
  href: Href;
}
const AppLink = ({text, className, href}: AppLinkProps) => {
  return (
    <Link href={href} className={className}>
      <View className={"px-4 py-2  "}>
        <Text className="text-white text-center underline text-sm font-poppins-regular">{text}</Text>
      </View>
    </Link>
  )
}

export default AppLink