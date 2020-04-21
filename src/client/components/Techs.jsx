import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tech from './Tech.jsx';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: '#121413',
    alignItems: 'center',
    borderRightColor: '#383838',
    borderRightWidth: 1,
  },
});

const Techs = ({ techs, time }) => {
  const { display } = styles;

  return (
    <View style={display}>
      {techs.map((tech, i) => <Tech key={i} tech={tech} time={time} />)}
    </View>
  );
};

export default Techs;
