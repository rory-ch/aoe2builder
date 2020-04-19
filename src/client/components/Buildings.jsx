import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'darkkhaki',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Buildings = () => {

  return (
    <View style={styles.header}>
      <Text>Buildings</Text>
    </View>
  );
};

export default Buildings;
