import { View, Text, StatusBar, SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import React from "react";
import { ArrowLeftCircleIcon } from 'react-native-heroicons/solid';

export default function ProductScreen() {

    const navigation = useNavigation();

    return(
        <View className='flex-1'>
            <StatusBar style="light" />
            <Image source={require('..assets/images/beansBackground2.png')}
                style={{height: 300, borderBottomLeftRadius: 50, border   bottomRightRadius: 50}}
                className="w-full absolute" />
            <SafeAreaView className="space-y-4">
                <View className="mx-4 flex-row justify-between items-center">
                    <TouchableOpacity onPress={()=>navigation.goBack}>
                        <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}