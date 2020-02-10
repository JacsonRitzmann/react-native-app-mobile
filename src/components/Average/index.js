import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

export default class Average extends Component {
  renderIcons(average, size) {
    var icons = [];
    var test,
      key = 1;
    for (let i = 0; i < average; i++) {
      key = i;
      if (i % 2 == 0) {
        icons.push(
          <Icon key={key} name="star" size={size} color="#FCD307"></Icon>,
        );
        test = 2;
      } else {
        test = 1;
      }
    }
    if (test == 1) {
      icons.push(
        <Icon key={key} name="star-half" size={size} color="#FCD307"></Icon>,
      );
    }
    return icons;
  }

  render() {
    return (
      <Container>
        {this.renderIcons(this.props.value, this.props.size)}
      </Container>
    );
  }
}
