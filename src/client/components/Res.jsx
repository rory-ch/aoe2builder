import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#121413',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resourceBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: 'seashell',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Res = ({ resources }) => {
  const { woodCount, foodCount, goldCount, stoneCount } = resources;
  const { container, resourceBox, header } = styles;
  return (
    <View style={container}>
      <View style={resourceBox}>
        <Text style={header}>{`Wood\n  ${woodCount}`}</Text>
      </View>
      <View style={resourceBox}>
        <Text style={header}>{`Food\n  ${foodCount}`}</Text>
      </View>
      <View style={resourceBox}>
        <Text style={header}>{`Gold\n  ${goldCount}`}</Text>
      </View>
      <View style={resourceBox}>
        <Text style={header}>{`Stone\n  ${stoneCount}`}</Text>
      </View>
    </View>
  );
};

export default Res;
