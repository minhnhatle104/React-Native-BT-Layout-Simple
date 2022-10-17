import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={[styles.viewSize,{backgroundColor:"#C9C9FF"}]}>
					<Text style={styles.textSize}>Purple: #C9C9FF</Text>
				</View>
				<View style={[styles.viewSize,{backgroundColor:"#3D85C6"}]}>
					<Text style={styles.textSize}>Blue: #3D85C6</Text>
				</View>
				<View style={[styles.viewSize,{backgroundColor:"#96CC96"}]}>
					<Text style={styles.textSize}>Green: #96CC96</Text>
				</View>
				<View style={[styles.viewSize,{backgroundColor:"#F4B940"}]}>
					<Text style={styles.textSize}>Yellow: #F4B940</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: 'center',
		padding:24
	},
	viewSize:{
		width:"100%",
		height:150,
		justifyContent:"center",
		alignItems:'center',
		marginTop:10,
		borderRadius:20
	},
	textSize:{
		fontSize:20,
		fontWeight:'bold',
	}
})