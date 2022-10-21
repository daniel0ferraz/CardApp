import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  margin-top: 14px;
  padding: 8px;
  background-color: #bdbdbd50;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled(TextInputMask)`
  width: 100%;
  margin-left: 8px;
  font-weight: 500;
  color: #2c2c2c;
  font-size: 16px;
`;
