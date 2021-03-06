import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';

export const Container = styled.View`
  width: ${({width}) => (width ? width : '100%')};
  height: 60px;
  margin-top: 14px;
  padding: 8px;
  background-color: #bdbdbd50;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  margin-left: 8px;
  font-weight: 500;
`;

export const MaskTextInput = styled(TextInputMask)`
  width: 100%;
  margin-left: 8px;
  font-weight: 500;
`;
