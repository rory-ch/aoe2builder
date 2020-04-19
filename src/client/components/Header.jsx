import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9d9dff',
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
