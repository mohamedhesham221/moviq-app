import { View, Text, ScrollView, Modal, Pressable } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Season } from '@/interfaces/api'

type SeasonModalProps = {
    season: Season;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const SeasonModal = ({season, visible, setVisible}: SeasonModalProps) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
        <View className="flex-1  justify-end">
          {/* Modal Container */}
          <View className="bg-black/95 rounded-t-3xl px-5 pt-6 pb-10">
            {/* Close Button */}
            <Pressable
              onPress={() => setVisible(false)}
              className="absolute right-5 top-5 z-10"
            >
              <MaterialCommunityIcons name="close" size={28} color="white" />
            </Pressable>

            {/* Header */}
            <View className="mb-4 pr-10">
              <Text className="text-white text-2xl font-poppins-bold">
                {season.name}
              </Text>

              <View className="flex-row items-center gap-2 mt-1">
                <MaterialCommunityIcons name="star" size={16} color="#FFD700" />
                <Text className="text-gray-color text-sm font-poppins-regular">
                  {season.vote_average?.toFixed(1) ?? "N/A"}
                </Text>
              </View>
            </View>

            {/* Overview */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text className="text-gray-color text-sm leading-6 font-poppins-regular">
                {season.overview || "No overview available."}
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
  )
}

export default SeasonModal