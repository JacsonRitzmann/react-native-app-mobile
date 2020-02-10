import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {URL_WITH_KEY} from '../../config/default';
import api from '../../server/api';
import {
  Container,
  ImageMovie,
  NavBar,
  TButton,
  Content,
  VStudio,
  VGenere,
  VRelease,
  Label,
  TText,
  styles,
} from './styles';

import Average from '../../components/Average';

export default class Detail extends Component {
  state = {
    title: '',
    img: '',
    average: '',
    text: '',
    studio: '',
    genres: '',
  };

  async componentDidMount() {
    const {navigation} = this.props;
    const id = navigation.getParam('id');
    const {data} = await api.get(URL_WITH_KEY(`/movie/${id}`));
    console.log(data.id);
    var studio = '';
    data.production_companies.forEach(element => {
      studio += !studio ? element.name : `, ${element.name}`;
    });
    var genres = '';
    data.genres.forEach(element => {
      genres += !genres ? element.name : `, ${element.name}`;
    });

    this.setState({
      img: data.backdrop_path,
      title: data.title,
      average: data.vote_average,
      text: data.overview,
      studio: studio,
      genres: genres,
      release: new Date(data.release_date).getFullYear(),
    });
  }
  retornPage() {
    const {navigation} = this.props;
    navigation.goBack();
  }

  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <ImageMovie
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${this.state.img}`,
          }}
        />
        <NavBar>
          <Icon.Button
            onPress={() => this.retornPage()}
            style={styles.Black}
            name="arrow-back"
            color="#FFFFFF"
            backgroundColor="rgba(0, 0, 0, 0.0)"></Icon.Button>
          <Icon.Button
            style={{marginRight: 30}}
            name="favorite-border"
            color="#FFFFFF"
            backgroundColor="rgba(0, 0, 0, 0.0)"></Icon.Button>
        </NavBar>
        <Content>
          <Text style={styles.Title}>{this.state.title}</Text>
          <View style={styles.ViewBtns}>
            <TButton>
              <Text style={styles.TextBtn}>ASSISTA AGORA</Text>
            </TButton>
            <Average size={17} value={parseInt(this.state.average)}></Average>
          </View>
          <Text
            style={{
              marginLeft: 30,
              marginRight: 30,
              fontSize: 13,
              fontWeight: 'normal',
              color: '#FFFFFF',
              opacity: 0.7,
              lineHeight: 24,
            }}>
            {this.state.text}
          </Text>
          <VStudio>
            <Label>Studio</Label>
            <TText>{this.state.studio}</TText>
          </VStudio>
          <VGenere>
            <Label>Genere</Label>
            <TText>{this.state.genres}</TText>
          </VGenere>
          <VRelease>
            <Label>Release</Label>
            <TText>{this.state.release}</TText>
          </VRelease>
        </Content>
      </Container>
    );
  }
}

Detail.navigationOptions = {
  headerShown: false,
};
