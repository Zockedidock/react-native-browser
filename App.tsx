import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import WebView from "react-native-webview"
import Dropup from "./components/dropup"
import Nav from "./components/nav"

const App = () => {
    const [url, setURL] = useState("https://expo.dev")
    const [dropup, setDropup] = useState(false)

    const toggleDropup = () => setDropup(!dropup)

    return (
        <View style={styles.container}>
            <WebView source={{ uri: url }} />
            {dropup ? <Dropup /> : null}
            <Nav setURL={setURL} toggleDropup={toggleDropup} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
    },
})

export default App
