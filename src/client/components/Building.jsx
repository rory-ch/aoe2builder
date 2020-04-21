import React from 'react';
import { StyleSheet, ActivityIndicator, View, Image } from 'react-native';
import { Tooltip } from 'react-native-elements';
import Menu from './Menu.jsx';

const styles = StyleSheet.create({
  icon: {
    width: 45,
    height: 45,
    borderRadius: 3,
    marginBottom: 4,
  },
  iconTraining: {
    width: 45,
    height: 45,
    borderRadius: 3,
    marginBottom: 4,
    opacity: 0.3,
  },
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

const Building = ({ building, addUnit, addTech, time }) => {
  const { image, units, techs } = building;
  const { icon, tooltip, iconTraining } = styles;
  if (techs.length > 0 && building.completesAt <= time) {
    return (
      <Tooltip containerStyle={tooltip} overlayColor="rgba(6, 6, 6, 0.7)" withPointer={false} popover={<Menu units={units} techs={techs} addUnit={addUnit} addTech={addTech} time={time} />}>
        <Image source={{ uri: image }} style={icon} PlaceholderContent={<ActivityIndicator />} />
      </Tooltip>
    );
  }
  return (
    <View>
      <Image source={{ uri: image }} style={building.completesAt > time ? iconTraining : icon} PlaceholderContent={<ActivityIndicator />} />
    </View>
  );
};

export default Building;
