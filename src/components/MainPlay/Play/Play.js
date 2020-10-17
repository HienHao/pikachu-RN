import React from 'react';
import * as ActionsPikachu from '../../../redux/action/PikachuActions';
import {connect} from 'react-redux';
import {Image, View, ScrollView, TouchableOpacity} from 'react-native';

import stylePlay from './stylePlay';

class Play extends React.Component {
  componentDidMount() {
    const {getMapPikachu} = this.props;
    getMapPikachu();
  }

  elementImage(playProps, element, row, col, clickElement) {
    const colorCheckLine = element.checkLine ? 'red' : '';
    return (
      <TouchableOpacity
        onPress={() => {
          clickElement(playProps, element, row, col);
        }}
        key={element.id}>
        <View
          style={[
            stylePlay.styleImage,
            {backgroundColor: element.checkLine ? colorCheckLine : ''},
          ]}>
          {element.statusEnable === false ? (
            <Image
              source={element.image}
              key={element.id}
              style={stylePlay.styleImage}
            />
          ) : (
            <View></View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
  // component array 16 images
  componentElement(playProps, elements, row, clickElement) {
    return (
      <View style={stylePlay.main__play__item}>
        {elements.map(
          (element, col) =>
            element.image !== '' &&
            this.elementImage(playProps, element, row, col, clickElement),
        )}
      </View>
    );
  }

  displayElements(playProps, clickElement) {
    return playProps.map((element, row) =>
      this.componentElement(playProps, element, row, clickElement),
    );
  }

  render() {
    const {playProps, clickElement} = this.props;
    return (
      <View>
        <ScrollView>{this.displayElements(playProps, clickElement)}</ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    playProps: state.PikachuReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMapPikachu: () => dispatch(ActionsPikachu.getMapPikachu()),
    clickElement: (array, element, row, col) =>
      dispatch(ActionsPikachu.clickElement(array, element, row, col)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);
