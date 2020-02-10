import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import AsynsStorage from '@react-native-community/async-storage';
import {URL_WITH_KEY} from '../../config/default';
import api from '../../server/api';

import {
  Container,
  Legend,
  TextCategoriy,
  TextSetFull,
  ListMovies,
  Movie,
  Avatar,
  Title,
} from './styles';

import Average from '../Average';

export default class Category extends Component {
  state = {
    url: '',
    movies: [],
    loading: false,
  };

  async componentDidMount() {
    const {movies} = this.state;
    const {data} = await api.get(URL_WITH_KEY(this.props.url));

    this.setState({
      movies: data.results,
      url: this.props.url,
    });
  }

  renderMovieNav(movie) {
    this.setState({
      loading: true,
    });
    const {navigation} = this.props;
    navigation.navigate('Detail', {id: movie});
  }

  render() {
    const {movies, loading} = this.state;
    return (
      <Container>
        <Legend>
          <TextCategoriy>{this.props.name}</TextCategoriy>
          <TextSetFull>Ver Todos</TextSetFull>
        </Legend>
        <ListMovies
          key={this.state.url}
          horizontal={true}
          data={movies}
          keyExtractor={movie => movie.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                this.renderMovieNav(item.id);
              }}>
              <Movie key={item.id}>
                <Avatar
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
                  }}></Avatar>
                <Title>
                  {item.title.length > 20
                    ? `${item.title.substr(0, 17)}...`
                    : item.title}
                </Title>
                <Average
                  size={14}
                  value={parseInt(item.vote_average)}></Average>
              </Movie>
            </TouchableOpacity>
          )}></ListMovies>
      </Container>
    );
  }
}
