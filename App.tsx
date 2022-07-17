import React, { useState } from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import WebView from "react-native-webview"
import Dropup from "./components/dropup"
import Nav from "./components/nav"

const App = () => {
	const [url, setURL] = useState("https://expo.dev")
	const [dropup, setDropup] = useState(null)

	// @ts-expect-error: this is intentional
	const toggleDropup = () => setDropup(dropup ? null : true)

	return (
		<SafeAreaView style={styles.container}>
			<WebView source={{ uri: url }} />
			{dropup ?? <Dropup />}
			<Nav setURL={setURL} toggleDropup={toggleDropup} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default App
