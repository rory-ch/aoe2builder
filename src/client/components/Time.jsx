import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkseagreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Time = () => {
  const [time, setTime] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Time</Text>
    </View>
  );
};

export default Time;
