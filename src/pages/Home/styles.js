import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  background-color: #2c3848;
`;

export const Header = styled.View`
  flex: 1;
  background: #5ca0d3;
  height: 262px;
`;

export const Form = styled.View`
  flex-direction: column;
  margin-top: 63px;
  margin-left: 56px;
  max-width: 280px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  height: 101px;
  width: 230px;
  line-height: 37px;
`;

export const DivInput = styled.View`
  margin-top: 10px;
  height: 33px;
  width: 280px;
  flex-direction: row;
  border-radius: 15px;
  border: 0.5px solid #5ca0f6;
  padding-left: 5px;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  padding-left: 4px;
  height: 30px;
  width: 250px;
  color: #6666;
`;

export const Content = styled.View`
  flex-direction: column;
  top: -20px;
  min-height: 300px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  background-color: #2c3848;
  padding: 30px;
`;
