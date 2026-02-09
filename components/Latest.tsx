import { View, Text } from 'react-native'
import React from 'react'
import SectionHeader from "@/components/SectionHeader";
import type { TMDBResponse, Trend } from "@/interfaces/api";
import type {Movie} from "@/interfaces/movie";
import { ENDPOINTS } from "@/constants/apiRoutes";
import { fetcher } from "@/services/api/handleRequest";
import { useQuery } from "@tanstack/react-query";

const Latest = () => {
   
  return (
    <View>
      <Text>Latest</Text>
    </View>
  )
}

export default Latest