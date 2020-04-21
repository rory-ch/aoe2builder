import React from 'react';
import { StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Tooltip, Text } from 'react-native-elements';
import Menu from './Menu.jsx';

const styles = StyleSheet.create({
  icon: {
    width: 45,
    height: 45,
    borderRadius: 3,
  },
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

const Building = ({ building, addUnit }) => {
  const { image, units, techs } = building;
  const { icon, tooltip } = styles;
  return (
    <Tooltip containerStyle={tooltip} overlayColor="rgba(6, 6, 6, 0.7)" withPointer={false} popover={<Menu units={units} techs={techs} addUnit={addUnit} />}>
      <Image source={{ uri: image }} style={icon} PlaceholderContent={<ActivityIndicator />} />
    </Tooltip>
  );
};

export default Building;
