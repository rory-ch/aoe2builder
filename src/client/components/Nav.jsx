import React from 'react';
import { Header } from 'react-native-elements';

const Nav = () => (
  <Header
    placement="center"
    backgroundColor="#5e5e5e"
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'BUILDR', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
  />
);

export default Nav;
