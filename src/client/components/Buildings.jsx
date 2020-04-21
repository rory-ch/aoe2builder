import React from 'react';
import { StyleSheet, View } from 'react-native';
import Building from './Building.jsx';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: '#121413',
    alignItems: 'center',
    borderRightColor: '#383838',
    borderRightWidth: 1,
  },
});

const Buildings = ({ buildings, addUnit }) => {
  const { display } = styles;

  return (
    <View style={display}>
      {buildings.map((building, i) => <Building key={i} building={building} addUnit={addUnit} />)}
    </View>
  );
};

export default Buildings;
