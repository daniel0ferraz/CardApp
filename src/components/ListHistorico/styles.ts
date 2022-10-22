import styled, {css} from 'styled-components/native';
import {ms} from 'react-native-size-matters';

export const BoxError = styled.View`
  align-items: center;
  margin-top: ${ms(80)};
`;

export const Date = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.gray2};
    font-size: 16px;
    font-weight: 700;
    margin-top: 5px;
    margin-bottom: 5px;
  `}
`;

export const ErrorData = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.gray2};
    font-size: 16px;
    font-weight: 400;
  `}
`;
