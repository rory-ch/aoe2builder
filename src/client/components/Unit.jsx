import React from 'react';
import { StyleSheet, ActivityIndicator, Image, View } from 'react-native';
import { Tooltip } from 'react-native-elements';
import UnitMenu from './UnitMenu.jsx';

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

const Unit = ({ unit, tasks, time, addBuilding }) => {
  const { image } = unit;
  const { icon, tooltip, iconTraining } = styles;
  if (Object.keys(tasks).length > 0 && unit.completesAt <= time) {
    return (
      <Tooltip containerStyle={tooltip} overlayColor="rgba(6, 6, 6, 0.7)" withPointer={false} popover={<UnitMenu addBuilding={addBuilding} time={time} tasks={tasks} />}>
        <Image source={{ uri: image }} style={icon} PlaceholderContent={<ActivityIndicator />} />
      </Tooltip>
    );
  }
  return (
    <View>
      <Image source={{ uri: image }} style={unit.completesAt > time ? iconTraining : icon} PlaceholderContent={<ActivityIndicator />} />
    </View>
  );
};

export default Unit;
