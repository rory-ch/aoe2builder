/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      // RATES
      woodRate: 0,
      foodRate: 0,
      goldRate: 0,
      stoneRate: 0,
      // RESOURCE STARTING TOTALS
      woodCount: 200,
      foodCount: 200,
      goldCount: 50,
      stoneCount: 200,
      // RESOURCE GATHERERS
      woodGatherers: 0,
      foodGatherers: 0,
      goldGatherers: 0,
      stoneGatherers: 0,
      // BUILDINGS/UNITS?TECHS IN BUILD
      buildings: [],
      units: [],
      techs: [],
      // ALL BUILDINGS/UNITS/TECHS FOR REFERENCE
      allBuildings: {},
      allUnits: {},
      allTechs: {},
      // APP INITIALIZING STATE
      initializing: true,
    };
    // BIND ALL FUNCTIONS
    this.getAllBuildings = this.getAllBuildings.bind(this);
    this.addBuilding = this.addBuilding.bind(this);
    this.getUnit = this.getUnit.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    // GET START UNITS ON LOAD
    const { getAllBuildings, addBuilding, getUnit, addUnit, setState } = this;
    const { time, allBuildings } = this.state;

    getAllBuildings(() => {
      addBuilding(allBuildings['Town Center'], time);

      getUnit(24, (villager) => {
        addUnit(villager, time);
        addUnit(villager, time);
        addUnit(villager, time);
      });

      getUnit(48, (scout) => {
        addUnit(scout, time);
        setState((state) => ({ ...state, initializing: !state.initializing }));
      });
    });
  }

  /*
    * API CALLS
  */

  getAllBuildings = (callback) => {
    const { allBuildings } = this.state;
    const { setState } = this;
    fetch('http://98.234.28.109:5040/buildings')
      .then((response) => response.json())
      .then((results) => {
        const totalBuildings = results.length; // count records to execut callback at proper time
        let count = 0;
        results.forEach((building) => {
          fetch(`http://98.234.28.109:5040/buildings/${building.buildingid}/units`)
            .then((response) => response.json())
            .then((units) => {
              building.units = units;
              fetch(`http://98.234.28.109:5040/buildings/${building.buildingid}/techs`)
                .then((response) => response.json())
                .then((techs) => {
                  building.techs = techs;
                  allBuildings[`${building.name}`] = building;
                  setState((state) => ({ ...state, allBuildings }));
                  count += 1;
                  if (count === totalBuildings) {
                    callback();
                  }
                })
                .catch((err) => { console.error(err); });
            })
            .catch((err) => { console.error(err); });
        });
      })
      .catch((err) => { console.error(err); });
  };

  getUnit = (unitId, callback) => {
    const { allUnits } = this.state;
    const { setState } = this;
    fetch(`http://98.234.28.109:5040/units/${unitId}`)
      .then((response) => response.json())
      .then((result) => {
        const newUnit = result[0];
        allUnits[`${newUnit.name}`] = newUnit;
        setState((state) => ({ ...state, allUnits }));
        return newUnit;
      })
      .then((newUnit) => { callback(newUnit); })
      .catch((err) => { console.error(err); });
  };

  // FUNCTIONS TO ADD BUILDINGS TO BUILD SET
  addBuilding = (building, currentTime) => {
    const { initializing, buildings } = this.state;
    const buildingWithNewProps = Object.create(building);
    buildingWithNewProps.buildStart = initializing ? currentTime + building.buildTime : building.buildTime;
    buildingWithNewProps.status = initializing ? 'idle' : 'construction';
    buildings.push(buildingWithNewProps);
    this.setState((state) => ({ ...state, buildings }));
  };

  addUnit = (unit, currentTime) => {
    const { initializing, units, allBuildings } = this.state;
    const unitWithNewProps = Object.create(unit);
    unitWithNewProps.buildStart = initializing ? currentTime + unit.buildTime : unit.buildTime;
    unitWithNewProps.status = initializing ? 'idle' : 'construction';
    unitWithNewProps.tasks = unit.unitid === 24 ? allBuildings : [];
    units.push(unitWithNewProps);
    this.setState((state) => ({ ...state, units }));
  };

  render() {
    const { time, woodCount, foodCount, goldCount, stoneCount, buildings, units, techs } = this.state;
    const { setState, addUnit } = this;
    return (
      <ErrorBoundary>
        <View style={styles.container}>
          <Nav />
          <Time time={time} setState={setState} />
          <Res resources={{ woodCount, foodCount, goldCount, stoneCount }} />
          <View style={styles.display}>
            <Buildings setState={setState} buildings={buildings} addUnit={addUnit} />
            <Units setState={setState} units={units} />
            <Techs techs={techs} />
          </View>
        </View>
      </ErrorBoundary>
    );
  }
}

export default App;
