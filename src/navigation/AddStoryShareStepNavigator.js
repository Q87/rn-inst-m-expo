import React from "react";
import { Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";

import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

import { ShareScreen } from "../screens/ShareScreen";

// Screen options
const screenOptions = (navigation) => ({
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title="Back to photo selection"
                iconName="chevron-left"
                onPress={() => navigation.navigate("AddStoryEditStepNavigator")}
                iconSize={35}
            />
        </HeaderButtons>
    ),

    headerTitle: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title="New Post"
                ButtonElement={
                    <Text
                        style={[styles.header__text, styles.header__text_title]}
                    >
                        New Post
                    </Text>
                }
            />
        </HeaderButtons>
    ),
    headerTitleAlign: "center",

    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title="Share"
                ButtonElement={
                    <Text
                        style={[styles.header__text, styles.header__text_next]}
                        onPress={() => {
                            navigation.dispatch(StackActions.popToTop());
                            navigation.navigate("HomeNavigator");
                        }}
                    >
                        Share
                    </Text>
                }
            />
        </HeaderButtons>
    ),
    headerRightContainerStyle: {
        paddingRight: 20,
    },
});

const AddStoryShareStepNavigatorStack = createStackNavigator();

/**
 * Show step of adding a new post
 */
export const AddStoryShareStepNavigator = () => (
    <AddStoryShareStepNavigatorStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: THEME.NAVIGATION_BACKGROUND,
            },
            headerTintColor: THEME.ICON_COLOR,
        }}
    >
        <AddStoryShareStepNavigatorStack.Screen
            name="ShareScreen"
            component={ShareScreen}
            options={({ navigation }) => ({
                ...screenOptions(navigation),
            })}
        />
    </AddStoryShareStepNavigatorStack.Navigator>
);

const styles = StyleSheet.create({
    header__text: {
        fontSize: 18,
    },
    header__text_title: {
        fontWeight: "600",
    },
    header__text_next: {
        color: THEME.ACTIVE_BACKGROUND,
    },
});
