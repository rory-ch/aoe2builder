import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
  },
});

const Res = () => {

  return (
    <View style={styles.container}>
      <Text>Res</Text>
    </View>
  );
};

export default Res;
