import React from "react"
import { View as Div, Text } from "react-native"
import std from "../std"

const { windowWidth, navWidth } = std

const Dropup = () => {
    return (
        <Div
            style={{
                position: "absolute",
                width: 120,
                height: 200,
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
            }}
        >
            <Text>Hello</Text>
        </Div>
    )
}
export default Dropup
