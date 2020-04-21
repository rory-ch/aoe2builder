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

const Menu = ({ tasks }) => {
  const { menu, header, avatar } = styles;
  return (
    <Card containerStyle={menu}>
      {
        tasks.map((task, i) => {
          return (
            <View key={i} style={header}>
              <ListItem leftAvatar={{ source: { uri: task.image }, style: avatar }} title={task.name} onPress={() => { }} />
            </View>
          );
        })
      }
    </Card>
  );
};

export default Menu;
