import React from 'react'
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Series from '@/components/series/Series';

const series = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 justify-start px-5 py-10">
        <Series />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default series