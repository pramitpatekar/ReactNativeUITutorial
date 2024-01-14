import { View, Text, StatusBar, SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import React from "react";
import { ArrowLeftCircleIcon, HeartIcon, MinusIcon, StarIcon } from 'react-native-heroicons/solid';

export default function ProductScreen(props) {

    const item = props.route.params;
    const navigation = useNavigation();
    const [size, setSize] = useState('small')


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

                    <TouchableOpacity className="rounded-full border-2 border-white p-2">
                        <HeartIcon size="24" color="white" />
                    </TouchableOpacity>

                </View>
                <View className="flex-row justify-center"
                    style={{
                        shadowColor: themeColors.bgDark,
                        shadowRadius: 30,
                        shadowOffset: {width: 0, height: 30},
                        shadowOpacity: 0.9
                    }}
                >
                    <Image source={item.image} className="h-60 w-60" />
                </View>

                <View style={{backgroundColor: themeColors.bgLight}}
                    className="flex-row mx-4 items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90"
                >
                    <StarIcon size="15" color="white" />
                    <Text className="text-base font-semibold text-white">
                        {items.stars}
                    </Text>
                </View>

                <View className="mx-4 flex-row justify-between items-center">
                    <Text style={{color: themeColors.text}} className="text-3xl font-semibold">
                        {item.name}
                    </Text>
                    <Text style={{color: themeColors.text}} className="text-lg font-semibold">
                        $ {item.price}
                    </Text>
                </View>
                <View className="mx-4 space-y-2">
                    <Text style={{color: themeColors.text}} className="text-lg font-bold">
                        Coffee size
                    </Text>
                    
                    <View className="flex-row justify-between">
                        <TouchableOpacity
                            onPress={()=> setSize('small')}
                            className="px-3 px-8 rounded-full"
                            style={{backgroundColor: size=='small' ? themeColors.bgLight : 'rgba(0,0,0,0.07)'}}
                        >
                            <Text className={size=='small' ? 'text-white' : 'text-gray-700'}>Small</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=> setSize('medium')}
                            className="px-3 px-8 rounded-full"
                            style={{backgroundColor: size=='medium' ? themeColors.bgLight : 'rgba(0,0,0,0.07)'}}
                        >
                            <Text className={size=='medium' ? 'text-white' : 'text-gray-700'}>Medium</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=> setSize('large')}
                            className="px-3 px-8 rounded-full"
                            style={{backgroundColor: size=='large' ? themeColors.bgLight : 'rgba(0,0,0,0.07)'}}
                        >
                            <Text className={size=='large' ? 'text-white' : 'text-gray-700'}>Large</Text>
                        </TouchableOpacity>

                    </View>
                    
                </View>
                <View className="mx-4 space-y-2 h-28">
                    <Text style={{color: themeColors.text}} className="text-lg font-bold">
                        About
                    </Text>
                    <Text className="text-gray-600">
                        {item.desc}
                    </Text>
                </View>
                <View className="flex-row justify-between items-center mx-4 mb-2">
                    <View className="flex-row items-center space-x-1">
                        <Text className="text-base text-gray-700 font-semibold opacity-60">
                            Volume
                        </Text>
                        <Text className="text-base text-black font-semibold">
                            {item.volume}
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
                        <TouchableOpacity>
                            <MinusIcon size="20" strokeWidth={3} color={themeColors.text} />
                        </TouchableOpacity>
                        <Text style={{color: themeColors.text}} className="font-extrabold text-lg">2</Text>
                        <TouchableOpacity>
                            <PlusIcon size="20" strokeWidth={3} color={themeColors.text} />
                        </TouchableOpacity>
                    </View>
                </View>
                
            </SafeAreaView>
        </View>
    )
}