/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useMemo, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './components/Nav.jsx';
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
  const [woodGatherers, setWoodGatherers] = useState(0);
  const [foodGatherers, setFoodGatherers] = useState(0);
  const [goldGatherers, setGoldGatherers] = useState(0);
  const [stoneGatherers, setStoneGatherers] = useState(0);

  // SET BUILT BUILDINGS, UNITS, TECHS
  const [buildings, setBuildings] = useState([]);
  const [units, setUnits] = useState([]);
  const [techs, setTechs] = useState([]);

  // App state
  const [initializing, setInitializing] = useState(true);

  // Tracks the data
  const [allBuildings, setAllBuildings] = useState({});
  const [allUnits, setAllUnits] = useState({});
  const [allTechs, setAllTechs] = useState({});

  // API CALLS
  const getAllBuildings = () => {
    fetch('http://98.234.28.109:5040/buildings')
      .then((response) => response.json())
      .then((results) => {
        results.forEach((building) => {
          fetch(`http://98.234.28.109:5040/buildings/${building.buildingid}/units`)
            .then((response) => response.json())
            .then((units) => {
              building.units = units;
              fetch(`http://98.234.28.109:5040/buildings/${building.buildingid}/techs`)
                .then((response) => response.json())
                .then((techs) => {
                  building.techs = techs;
                  setAllBuildings({ ...allBuildings, [building.name]: building });
                })
                .catch((err) => { console.error(err); });
            })
            .catch((err) => { console.error(err); });
        });
      })
      .catch((err) => { console.error(err); });
  };

  const getBuilding = (buildingId, callback) => {
    fetch(`http://98.234.28.109:5040/buildings/${buildingId}`)
      .then((response) => response.json())
      .then((result) => { setAllBuildings({ ...allBuildings, [result.name]: result }); return result; })
      .then((result) => { callback(result); })
      .catch((err) => { console.error(err); });
  };

  const getUnit = (unitId, callback) => {
    fetch(`http://98.234.28.109:5040/units/${unitId}`)
      .then((response) => response.json())
      .then((result) => { setAllUnits({ ...allBuildings, [result.name]: result }); return result; })
      .then((result) => { callback(result); })
      .catch((err) => { console.error(err); });
  };

  // FUNCTIONS TO ADD BUILDINGS TO BUILD SET
  const addBuilding = (building, currentTime) => {
    const buildingWithNewProps = Object.create(building);
    buildingWithNewProps.buildStart = initializing ? currentTime + building.buildTime : building.buildTime;
    buildingWithNewProps.status = initializing ? 'idle' : 'construction';
    setBuildings([...buildings, buildingWithNewProps]);
  };

  const addUnit = (unit, currentTime) => {
    const unitWithNewProps = Object.create(unit);
    unitWithNewProps.buildStart = initializing ? currentTime + unit.buildTime : unit.buildTime;
    unitWithNewProps.status = initializing ? 'idle' : 'construction';
    setUnits([...units, unitWithNewProps]);
  };

  // GET START UNITS ON LOAD
  useMemo(() => {
    getBuilding(8, (result) => {
      addBuilding(result, time);
    });

    getUnit(24, (villager) => {
      addUnit(villager, time);
      addUnit(villager, time);
      addUnit(villager, time);
    });

    getUnit(48, (scout) => {
      addUnit(scout, time);
    });

    getAllBuildings();
  }, []);

  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <Nav />
        <Time time={time} setTime={setTime} />
        <Res resources={{ woodCount, foodCount, goldCount, stoneCount }} />
        <View style={styles.display}>
          <Buildings buildings={buildings} setTechs={setTechs} addUnit={addUnit} />
          <Units units={units} setUnits={setUnits} />
          <Techs techs={techs} />
        </View>
      </View>
    </ErrorBoundary>
  );
}
