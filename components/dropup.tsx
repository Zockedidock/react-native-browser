import React from "react"
import { View, StyleSheet } from "react-native"
import std from "../std"
import CustomButton from "./custombutton"

const DropupButton = CustomButton
const { windowWidth, navWidth, dropupWidth, dropupHeight } = std

const Dropup = () => {
    return (
        <View style={styles.container}>
            <View>
                <DropupButton text="Settings"></DropupButton>
                <DropupButton text="History"></DropupButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: dropupWidth,
        height: dropupHeight,
        padding: 5,
        backgroundColor: "white",
        bottom: 1,
        right: 1,
        marginBottom: 72,
        marginRight: windowWidth / 2 - navWidth / 2,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
})

export default Dropup
