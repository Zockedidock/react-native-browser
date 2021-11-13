import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { NavButtonProps } from "../std"

const CustomButton = (props: NavButtonProps) => {
    const { onPress, text, style } = props
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text> {text} </Text>
        </TouchableOpacity>
    )
}

export default CustomButton
