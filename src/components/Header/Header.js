import React from 'react';
import {View, Text} from 'react-native';

import styleHeader from './styleHeader';

class Header extends React.Component {
  render() {
    return (
      <View>
        <Text style={[styleHeader.header]}>Game Pikachu</Text>
      </View>
    );
  }
}

export default Header;
