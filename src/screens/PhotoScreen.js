import React, { useState, useCallback } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { THEME } from "../theme";
import { useIsFocused } from "@react-navigation/native";

/**
 * Get permission to access the camera
 */
const askForPermissions = async () => {
    const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    );

    // If access was denied
    if (status !== "granted") {
        Alert.alert("Ошибка", "Вы не дали прав на создание фото");

        return false;
    }

    return true;
};

/**
 * Show photo adding screen
 */
export const PhotoScreen = ({ navigation }) => {
    const [image, setImage] = useState(null);

    /**
     * Take a picture with a camera
     */
    const takePhoto = useCallback(async () => {
        const hasPermissions = await askForPermissions();

        // If the camera wasn't accessed
        if (!hasPermissions) {
            return;
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9],
        });

        // If the photo was cancelled
        if (img.cancelled) {
            navigation.navigate("LibraryNavigator");
        } else {
            // If the photo was taken
            setImage(img.uri);
        }
    }, [navigation]);

    // If the photo wasn't taken when switching to the screen
    if (useIsFocused() && !image) {
        takePhoto();
    }

    return (
        <View style={styles.wrapper}>
            {image && <Image style={styles.image} source={{ uri: image }} />}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: THEME.MAIN_CONTENT_COLOR,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});
