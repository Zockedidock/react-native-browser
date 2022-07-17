import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { Icon } from "react-native-elements"
import { CustomButtonProps, CustomIconButtonProps } from "../std"

const CustomButton = (props: CustomButtonProps | CustomIconButtonProps) => {
	const { onPress, text, style, icon } = props
	return (
		<TouchableOpacity style={style} onPress={onPress}>
			{icon ?? <Icon name={"" + icon} />}
			<Text>{text}</Text>
		</TouchableOpacity>
	)
}

export default CustomButton
