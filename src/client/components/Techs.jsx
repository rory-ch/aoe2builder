import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: '#121413',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: 'seashell',
  },
});


const Techs = () => {
  const { display, header } = styles;

  return (
    <View style={display}>
      <Text style={header}>Techs</Text>
    </View>
  );
};

export default Techs;
