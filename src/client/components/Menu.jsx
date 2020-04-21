import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Card, Divider } from 'react-native-elements';

const styles = StyleSheet.create({
  menu: {
    position: 'relative',
    left: 100,
    padding: 0,
    width: 200,
    height: 400,
  },
  header: {
    color: 'seashell',
  },
  avatar: {
    width: 20,
    height: 20,
  },
});

const Menu = ({ units, techs, addUnit }) => {
  const { menu, header, avatar } = styles;
  return (
    <Card containerStyle={menu}>
      {
        units.map((unit, i) => {
          return (
            <View key={i} style={header}>
              <ListItem leftAvatar={{ source: { uri: unit.image }, style: avatar }} title={unit.name} onPress={() => { addUnit(unit); }} />
            </View>
          );
        })
      }
      <Divider />
      {
        techs.map((tech, i) => {
          return (
            <View key={i} style={header}>
              <ListItem leftAvatar={{ source: { uri: tech.image }, style: avatar }} title={tech.name} />
            </View>
          );
        })
      }
    </Card>
  );
};

export default Menu;
