import styled from 'styled-components/native';

export const Container = styled.View``;

export const Legend = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextCategoriy = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
  text-transform: uppercase;
`;

export const TextSetFull = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 400;
`;

export const ListMovies = styled.FlatList`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Movie = styled.View`
  padding: 5px;
`;
export const Avatar = styled.Image`
  width: 130px;
  height: 170px;
  border-radius: 10px;
  background: #eee;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 13px;
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
`;
