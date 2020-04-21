import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Feather } from "@expo/vector-icons";
import { THEME } from "../theme";

/**
 * Show header icon
 */
export const AppHeaderIcon = (props) => (
    <HeaderButton
        {...props}
        iconSize={24}
        IconComponent={Feather}
        color={THEME.ICON_COLOR}
    />
);
