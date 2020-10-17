import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {connect} from 'react-redux';

import * as ActionsPikachu from '../../redux/action/PikachuActions';
import footerStyle from './FooterStyle';

class Footer extends Component {
  render() {
    const {clickPosition, clickReplay, PikachuReducer} = this.props;
    return (
      <View style={footerStyle.footer}>
        <TouchableOpacity
          style={[footerStyle.buttonPosition, {marginRight: 10}]}
          onPress={() => clickPosition(PikachuReducer)}>
          <View>
            <Text style={footerStyle.footer__changeBlock}>Đổi vị trí</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={clickReplay}
          style={footerStyle.buttonReplay}>
          <View>
            <Text style={footerStyle.footer__replay}>Chơi lại</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clickPosition: (matrix) => dispatch(ActionsPikachu.clickPosition(matrix)),
    clickReplay: () => dispatch(ActionsPikachu.clickReplay()),
  };
}

function mapStateToProps(state) {
  return {
    PikachuReducer: state.PikachuReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
