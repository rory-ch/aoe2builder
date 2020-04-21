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

const Tech = ({ tech, time }) => {
  const { image } = tech;
  const { icon, tooltip, iconTraining } = styles;
  console.log(`${tech.name} completes at ${tech.completesAt}`);
  console.log(`Current time is ${time}`);
  console.log(`Rendering ${tech.completesAt > time ? 'iconTraining' : 'icon'}`);
  return (
    <View>
      <Image source={{ uri: image }} style={tech.completesAt > time ? iconTraining : icon} PlaceholderContent={<ActivityIndicator />} />
    </View>
  );
};

export default Tech;