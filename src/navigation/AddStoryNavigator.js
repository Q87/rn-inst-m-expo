import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme";
import { AddStoryScreen } from "../screens/AddStoryScreen";

const AddStoryNavigatorStack = createStackNavigator();

/**
 * Show navigator for adding story actions
 */
export const AddStoryNavigator = () => (
    <AddStoryNavigatorStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: THEME.NAVIGATION_BACKGROUND_COLOR,
            },
            headerTintColor: THEME.ICON_COLOR,
        }}
    >
        <AddStoryNavigatorStack.Screen
            name="AddStory"
            component={AddStoryScreen}
            options={({ navigation }) => ({
                headerTitle: "",
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                        <Item
                            title="Take photo"
                            iconName="camera"
                            onPress={() => console.log("Take photo")}
                        />
                    </HeaderButtons>
                ),
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                        <Item
                            title="IGTV actions"
                            iconName="tv"
                            onPress={() => console.log("IGTV actions")}
                        />
                        <Item
                            title="Send a message"
                            iconName="send"
                            onPress={() => console.log("Send a message")}
                        />
                    </HeaderButtons>
                ),
            })}
        />
    </AddStoryNavigatorStack.Navigator>
);
