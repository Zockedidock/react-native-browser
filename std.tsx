import { Dimensions } from "react-native"
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native"

declare interface stdProps {
	windowWidth: number
	windowHeight: number
	navWidth: number
	dropupWidth: number
	dropupHeight: number
}

const std: stdProps = {
	windowWidth: Dimensions.get("window").width,
	windowHeight: Dimensions.get("window").height,
	navWidth: 337,
	dropupWidth: 120,
	dropupHeight: 200,
}

declare interface NavProps {
	setURL: any
	toggleDropup: any
}

declare interface CustomButtonProps {
	text: string
	onPress?: ((event: GestureResponderEvent) => void) | undefined
	style?: StyleProp<ViewStyle> | undefined
	icon?: string
}
declare interface CustomIconButtonProps {
	text?: string
	onPress?: ((event: GestureResponderEvent) => void) | undefined
	style?: StyleProp<ViewStyle> | undefined
	icon: string
}

export default std
export { NavProps, CustomButtonProps, CustomIconButtonProps }
