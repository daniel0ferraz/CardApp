import {ms} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const BoxFilter = styled.View`
  width: 100%;
  background: red;
`;

export const Category = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const BoxCategory = styled.TouchableOpacity`
  ${({theme}) => css`
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;

    border-radius: 8px;
    margin-bottom: 5px;
    padding: 2px;
  `}
`;
export const TextCategory = styled.Text`
  font-weight: 700;
  color: #ffffff;
  font-size: ${ms(11)};
`;
