import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../HomeScreen";
import { LogBox, Text, View } from 'react-native';

import { createBottomNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import { HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid } from 'react-native-heroicons/solid';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);


export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                contentStyle: {backgroundColor: 'white'}
            }}>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


function HomeTabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="favourite" component={HomeScreen} />
            <Tab.Screen name="cart" component={HomeScreen} />
        </Tab.Navigator>
    )
}