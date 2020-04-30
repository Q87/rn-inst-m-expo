import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { THEME } from "../theme";

import { HomeNavigator } from "./HomeNavigator";
import { SearchNavigator } from "./SearchNavigator";
import { AddStoryNavigator } from "./AddStoryNavigator";
import { LikesNavigator } from "./LikesNavigator";
import { ProfileNavigator } from "./ProfileNavigator";

const BottomNavigatorStack = createBottomTabNavigator();

const bottomTabsConfig = {
    tabBarOptions: {
        activeTintColor: THEME.ICON_COLOR,
    },
};

/**
 * Show navigator for bottom tabs
 */
const BottomNavigator = () => (
    <BottomNavigatorStack.Navigator {...bottomTabsConfig}>
        <BottomNavigatorStack.Screen
            name="HomeNavigator"
            component={HomeNavigator}
            options={{
                tabBarLabel: "",
                tabBarIcon: (info) => (
                    <Feather name="home" size={25} color={info.color} />
                ),
            }}
        />
        <BottomNavigatorStack.Screen
            name="SearchNavigator"
            component={SearchNavigator}
            options={{
                tabBarLabel: "",
                tabBarIcon: (info) => (
                    <Feather name="search" size={25} color={info.color} />
                ),
            }}
        />
        <BottomNavigatorStack.Screen
            name="AddStoryNavigator"
            component={AddStoryNavigator}
            options={{
                tabBarLabel: "",
                tabBarIcon: (info) => (
                    <Feather name="plus-square" size={25} color={info.color} />
                ),
                tabBarVisible: false,
            }}
        />
        <BottomNavigatorStack.Screen
            name="LikesNavigator"
            component={LikesNavigator}
            options={{
                tabBarLabel: "",
                tabBarIcon: (info) => (
                    <MaterialCommunityIcons
                        name="heart"
                        size={25}
                        color={info.color}
                    />
                ),
            }}
        />
        <BottomNavigatorStack.Screen
            name="ProfileNavigator"
            component={ProfileNavigator}
            options={{
                tabBarLabel: "",
                tabBarIcon: (info) => (
                    <Feather name="circle" size={25} color={info.color} />
                ),
            }}
        />
    </BottomNavigatorStack.Navigator>
);

/**
 * Show app navigation
 */
export const AppNavigation = () => (
    <NavigationContainer>
        <BottomNavigator />
    </NavigationContainer>
);
