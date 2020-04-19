import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Units = () => {

  return (
    <View style={styles.header}>
      <Text>Units</Text>
    </View>
  );
};

export default Units;
