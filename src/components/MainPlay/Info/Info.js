import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import styleMainPlaySection from './styleInfo';

class Info extends React.Component {
  render() {
    const {Info} = this.props;
    return (
      <View style={styleMainPlaySection.main__info}>
        <View>
          <Text style={styleMainPlaySection.main__info__level}>Bàn</Text>
          <Text style={styleMainPlaySection.main__info__level}>
            {Info.level}
          </Text>
        </View>
        <View>
          <Text style={styleMainPlaySection.main__info__level}>Lượt đổi</Text>
          <Text style={styleMainPlaySection.main__info__level}>
            {Info.position}
          </Text>
        </View>
        <View>
          <Text style={styleMainPlaySection.main__info__level}>Điểm</Text>
          <Text style={styleMainPlaySection.main__info__level}>
            {Info.score}
          </Text>
        </View>
      </View>
    );
  }
}

function mapSateToProps(state) {
  return {
    Info: state.InfoReducer,
  };
}

export default connect(mapSateToProps, this)(Info);
