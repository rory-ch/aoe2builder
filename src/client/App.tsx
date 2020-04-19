/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.jsx';
import Time from './components/Time.jsx';
import Res from './components/Res.jsx';
import Buildings from './components/Buildings.jsx';
import Units from './components/Units.jsx';
import Techs from './components/Techs.jsx';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2d2d2d',
	},
	display: {
		flex: 7,
		flexDirection: 'row',
		backgroundColor: 'dimgray',
	},
});

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
			<Time />
			<Res />
			<View style={styles.display}>
				<Buildings />
				<Units />
				<Techs />
			</View>
    </View>
  );
}
