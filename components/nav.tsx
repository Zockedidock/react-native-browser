import React from "react"
import { StyleSheet, View, TextInput } from "react-native"
import CustomButton from "./custombutton"
import std, { NavProps } from "../std"

const NavButton = CustomButton
const { windowWidth, navWidth } = std

const Nav = (props: NavProps) => {
    const { setURL, toggleDropup } = props
    const submitUrl = () => {
        setURL("https://google.com")
    }
    return (
        <View style={styles.nav}>
            <NavButton
                icon="twitter"
                style={styles.button}
                onPress={() => alert("back")}
            />
            <NavButton
                text="F"
                style={styles.button}
                onPress={() => setURL("https://google.com")}
            />
            <TextInput style={styles.textField} onSubmitEditing={submitUrl} />
            <NavButton
                text="S"
                style={styles.button}
                onPress={() => toggleDropup()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        position: "absolute",
        backgroundColor: "white",
        flexDirection: "row",
        padding: 10,
        bottom: 1,
        marginBottom: 20,
        width: navWidth,
        marginLeft: windowWidth / 2 - navWidth / 2,
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
    textField: {
        borderStyle: "solid",
        borderColor: "gray",
        width: 200,
        maxWidth: 200,
        marginLeft: 8,
        marginRight: 8,
        height: 30,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        backgroundColor: "white",
        marginLeft: 2,
        marginRight: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
        borderRadius: 5,
    },
})

export default Nav
