import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-content'
import { StatusBar } from 'expo-status-bar'

import { themeColors } from '../theme'
import { MapPinIcon } from 'react-native-heroicons/solid';
import { BellIcon }  from 'react-native-'

export default function HomeScreen() {
    return(
        <View className="flex-1 relative bg-white">
            <StatusBar />
            <Image source={require('../assets/images/beansBackground1.png')}
            className="w-full absolute -top-5 opacity-10"
            style={{height: 220}}
        />
        <SafeAreaView className="flex-1">
            <View className="">
                <Image source={require('../assets/images/avatar.png')}
                    className="h-9 w-9 rounded-full" />
                <View className="flex-row items-center space-x-2">
                    <MapPinIcon size="25" color={themeColors.bgLight} />
                    <Text className="text-base font-semibold">New York, NYC</Text>
                </View>

            </View>
        </SafeAreaView>
        </View>
    )
}