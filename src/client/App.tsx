/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.jsx';
import Time from './components/Time.jsx';
import Res from './components/Res.jsx';
import Buildings from './components/Buildings.jsx';
import Units from './components/Units.jsx';
import Techs from './components/Techs.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	display: {
		flex: 7,
		flexDirection: 'row',
		backgroundColor: 'dimgray',
	},
});

export default function App() {
	const [time, setTime] = useState(0);
	// RESOURCES: GATHER RATE
  const [woodRate, setWoodRate] = useState(0);
  const [foodRate, setFoodRate] = useState(0);
  const [goldRate, setGoldRate] = useState(0);
	const [stoneRate, setStoneRate] = useState(0);
	// RESOURCES: TOTALS
  const [woodCount, setWoodCount] = useState(200);
  const [foodCount, setFoodCount] = useState(200);
  const [goldCount, setGoldCount] = useState(50);
	const [stoneCount, setStoneCount] = useState(200);
	// RESOURCES: GATHERERS
	const [woodGatherers, setWoodGatherers] = useState(200);
  const [foodGatherers, setFoodGatherers] = useState(200);
  const [goldGatherers, setGoldGatherers] = useState(50);
	const [stoneGatherers, setStoneGatherers] = useState(200);

  return (
		<ErrorBoundary>
			<View style={styles.container}>
				<Header />
				<Time time={time} setTime={setTime} />
				<Res resources={{woodCount, foodCount, goldCount, stoneCount}} gatherers={{woodGatherers, foodGatherers, goldGatherers, stoneGatherers}}/>
				<View style={styles.display}>
					<Buildings />
					<Units />
					<Techs />
				</View>
			</View>
		</ErrorBoundary>
  );
}
