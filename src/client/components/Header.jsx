import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9d9dff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Header = () => {

  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;
