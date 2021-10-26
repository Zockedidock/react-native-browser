import { Dimensions } from "react-native"

const std = {
    windowWidth: Dimensions.get("window").width,
    windowHeight: Dimensions.get("window").height,
    navWidth: 337,
}

export interface NavProps {
    setURL: any
    toggleDropup: any
}

export default std
