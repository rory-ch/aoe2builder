import React from 'react';
import { StyleSheet, Slider, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121413',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: 500,
    maxWidth: '90%',
  },
  header: {
    marginTop: 5,
    color: 'seashell',
    fontWeight: 'bold',
  },
});

const Time = ({ time, setState }) => {
  const maxTime = 500; // start with 25 minutes
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{Math.floor(time / 60)}m {time % 60}s</Text>
      <Slider
        style={styles.slider}
        maximumValue={maxTime}
        onValueChange={(value) => { setState({ time: parseInt(value, 10) }); }}
      />
    </View>
  );
};

export default Time;
