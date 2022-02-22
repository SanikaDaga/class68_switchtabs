import React, {Component} from "react";
import { EdgeInsets, useSafeAreaFrame } from "react-native-safe-area-context";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchScreen from "../screens/SearchScreen";
import TransactionScreen from "../screens/TransactionScreen";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                <Tab.Screen name="SearchScreen" component={SearchScreen}/>
                <Tab.Screen name="TransactionScreen" component={TransactionScreen} />
            </Tab.Navigator>
            </NavigationContainer>
        )
    }
}