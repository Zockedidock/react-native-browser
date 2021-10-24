import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Button, View } from "react-native"
import WebView from "react-native-webview"

export default function App() {
    let [url, setURL] = useState("https://expo.dev")

    return (
        <View style={styles.container}>
            <View>
                <Button title="<" onPress={() => alert("back")}></Button>
                <Button title=">" onPress={() => alert("forward")}></Button>
            </View>
            <WebView source={{ uri: url }} style={styles.web} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        width: 20,
    },
    web: {},
})
