import { View, Text } from 'react-native'
import React from 'react'
import { MediaCast } from '@/interfaces/api'


const MediaCastWrapper = ({cast}: MediaCast) => {
    console.log(cast);
    
  return (
    <View>
      <Text>MediaCast</Text>
    </View>
  )
}

export default MediaCastWrapper