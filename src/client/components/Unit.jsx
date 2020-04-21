import React from 'react';
import { StyleSheet, ActivityIndicator, Image, View } from 'react-native';
import { Tooltip } from 'react-native-elements';
import Menu from './Menu.jsx';

const styles = StyleSheet.create({
  icon: {
    width: 45,
    height: 45,
    borderRadius: 3,
    marginBottom: 4,
  },
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

const Unit = ({ unit, tasks }) => {
  const { image } = unit;
  const { icon, tooltip } = styles;

  if (tasks.length > 1) {
    return (
      <Tooltip containerStyle={tooltip} overlayColor="rgba(6, 6, 6, 0.7)" withPointer={false} popover={<Menu tasks={tasks} />}>
        <Image source={{ uri: image }} style={icon} PlaceholderContent={<ActivityIndicator />} />
      </Tooltip>
    );
  }
  return (
    <View >
      <Image source={{ uri: image }} style={icon} PlaceholderContent={<ActivityIndicator />} />
    </View>
  );
};

export default Unit;
