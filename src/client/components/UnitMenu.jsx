import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Card, Divider } from 'react-native-elements';

const styles = StyleSheet.create({
  menu: {
    position: 'relative',
    right: 65,
    bottom: 55,
    // margin: 'auto',
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

const Task = (type, start, finish) => {
  this.type = type;
  this.start = start;
  this.finish = finish;
};

const UnitMenu = ({ tasks, addBuilding, time }) => {
  const { menu, header, avatar } = styles;
  return (
    <Card containerStyle={menu}>
      {
        Object.keys(tasks).map((key, i) => (
          <View key={i} style={header}>
            <ListItem
              leftAvatar={{ source: { uri: tasks[key].image }, style: avatar }}
              title={tasks[key].name}
              onPress={() => {
                addBuilding(tasks[key], time);
              }}
            />
          </View>
        ))
      }
    </Card>
  );
};

export default UnitMenu;
