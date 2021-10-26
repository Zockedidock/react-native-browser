import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { NavButtonProps } from "../std"

const NavButton = (props: NavButtonProps) => {
    const { onPress, text, style } = props
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text> {text} </Text>
        </TouchableOpacity>
    )
}

export default NavButton
