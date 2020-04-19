import React from 'react';
import { StyleSheet, Slider, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkseagreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: 500,
    maxWidth: '90%',
  },
  header: {
    color: 'seashell',
    fontWeight: 'bold',
  },
});

const Time = ({ time, setTime }) => {
  const maxTime = 1000;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Game Time: {time}</Text>
      <Slider
        style={styles.slider}
        maximumValue={maxTime}
        onValueChange={(value) => { setTime(parseInt(value * maxTime, 10)); }}
      />
    </View>
  );
};

export default Time;
