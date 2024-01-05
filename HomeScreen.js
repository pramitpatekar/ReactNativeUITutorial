import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-content'
import { StatusBar } from 'expo-status-bar'


export default function HomeScreen() {
    return(
        <View className="flex-1 relative bg-white">
            <StatusBar />
            <Image source={require('../assets/images/beansBackground1.png')}
            className="w-full absolute -top-5 opacity-10"
            style={{height: 220}}
        />
        <SafeAreaView className="flex-1">
            
        </SafeAreaView>
        </View>
    )
}