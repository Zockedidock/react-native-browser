import { Dimensions } from "react-native"
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native"

const std = {
    windowWidth: Dimensions.get("window").width,
    windowHeight: Dimensions.get("window").height,
    navWidth: 337,
    dropupWidth: 120,
    dropupHeight: 200,
}

export interface NavProps {
    setURL: any
    toggleDropup: any
}

export interface NavButtonProps {
    text: string
    onPress?: ((event: GestureResponderEvent) => void) | undefined
    style?: StyleProp<ViewStyle> | undefined
}

export default std
