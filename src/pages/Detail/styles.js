import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #2c3848;
`;
export const ImageMovie = styled.Image`
  flex-direction: row;
  height: 320px;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const NavBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  top: 50px;
`;

export const Content = styled.View`
  flex-direction: column;
  width: 100%;
  height: 100%
  margin-top: 290px;
  background-color: #2c3848;
`;

export const TButton = styled(RectButton)`
  font-size: 10px;
  height: 33px;
  padding: 10px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.3);
`;
export const VStudio = styled.View`
  margin-left: 30px;
  margin-top: 30px;
  flex-direction: row;
`;
export const VGenere = styled.View`
  margin-left: 30px;
  margin-top: 5px;
  flex-direction: row;
`;
export const VRelease = styled.View`
  margin-left: 30px;
  margin-top: 5px;
  flex-direction: row;
`;
export const Label = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
`;
export const TText = styled.Text`
  max-width: 300px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 13px;
  font-weight: normal;
  color: #ffffff;
  opacity: 0.7;
`;

export const styles = StyleSheet.create({
  Title: {
    marginLeft: 30,
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  ViewBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 25,
  },
  TextBtn: {
    color: '#FFFFFF',
    fontSize: 12,
    marginLeft: 5,
    marginRight: 5,
  },
});
