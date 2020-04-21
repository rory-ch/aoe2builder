import React from 'react';
import { StyleSheet, View } from 'react-native';
import Unit from './Unit.jsx';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: '#121413',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#383838',
    borderRightWidth: 1,
  },
});

const Units = ({ units }) => {
  const { display } = styles;

  return (
    <View style={display}>
      {units.map((unit, i) => <Unit key={i} unit={unit} />)}
    </View>
  );
};

export default Units;
