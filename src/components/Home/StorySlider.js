import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { THEME } from "../../theme";
import Swiper from "react-native-swiper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StoryActionsBar } from "./StoryActionsBar";

/**
 * Show story slider
 */
export const StorySlider = ({ images }) => {
    // Current slide
    const [pos, setPos] = useState(0);
    // Number of slides
    const qty = images.length;

    return (
        <View>
            <View>
                <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    showsPagination={false}
                    onIndexChanged={(index) => {
                        setPos(index);
                    }}
                >
                    {images.map(({ id, url }) => (
                        <View style={styles.slide} key={id}>
                            <Image style={styles.image} source={{ uri: url }} />

                            <View style={styles.account}>
                                <MaterialCommunityIcons
                                    name="account"
                                    size={15}
                                    color={THEME.MAIN_CONTENT_COLOR}
                                />
                            </View>
                        </View>
                    ))}
                </Swiper>

                <View style={styles.counter}>
                    <Text style={styles.counter__text}>
                        {pos + 1} / {qty}
                    </Text>
                </View>
            </View>

            <StoryActionsBar qty={qty} pos={pos} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 278,
    },
    slide: {
        height: 278,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    account: {
        position: "absolute",
        left: 12,
        bottom: 12,
        width: 24,
        height: 24,
        borderRadius: 100,
        backgroundColor: THEME.ICON_COLOR,
        justifyContent: "center",
        alignItems: "center",
    },
    counter: {
        position: "absolute",
        top: 12,
        right: 12,
        height: 24,
        backgroundColor: THEME.ICON_COLOR,
        paddingHorizontal: 12,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    counter__text: {
        color: THEME.MAIN_CONTENT_COLOR,
        letterSpacing: -1,
    },
});
