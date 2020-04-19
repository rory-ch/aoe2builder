import React, { useState } from 'react';
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
});

const Time = () => {
  const [time, setTime] = useState(0);
  const maxTime = 1000;
  return (
    <View style={styles.container}>
      <Text>Game Time: {time}</Text>
      <Slider style={styles.slider} minimumValue={0} maximum Value={maxTime} onValueChange={(value) => { setTime(parseInt(value * maxTime, 10)); }} />
    </View>
  );
};

export default Time;
