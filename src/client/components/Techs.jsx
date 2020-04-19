import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'burlywood',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const Techs = () => {

  return (
    <View style={styles.header}>
      <Text>Techs</Text>
    </View>
  );
};

export default Techs;
