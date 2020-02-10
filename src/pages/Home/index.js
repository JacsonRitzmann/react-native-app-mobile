import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import api from '../../server/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Form,
  Title,
  DivInput,
  Input,
  Content,
} from './styles';

import Category from '../../components/Category';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Form>
            <Title>Olá, o que você quer assistir?</Title>
            <DivInput>
              <Icon name="search" size={15} color="#fff" />
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Search"
                returnKeyType="send"
                onSubmitEditing={this.handlerList}
              />
            </DivInput>
          </Form>
        </Header>
        <Content>
          <Category
            key={1}
            url="movie/now_playing"
            name="Em Cartaz"
            navigation={this.props.navigation}
          />
          <Category
            key={2}
            url="movie/popular"
            name="Populares"
            navigation={this.props.navigation}
          />
          <Category
            key={3}
            url="movie/top_rated"
            name="Melhores avaliados​"
            navigation={this.props.navigation}
          />
          <Category
            key={4}
            url="movie/upcoming"
            name="Em breve"
            navigation={this.props.navigation}
          />
        </Content>
      </Container>
    );
  }
}

Home.navigationOptions = {
  headerShown: false,
};
