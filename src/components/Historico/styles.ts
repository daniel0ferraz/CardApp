import styled, {css} from 'styled-components/native';
import {ms} from 'react-native-size-matters';

export const ContentItens = styled.View`
  ${({theme}) => css`
    /* flex: 1; */
    flex-direction: row;
    justify-content: space-between;
    background: ${theme.colors.white};
    border-bottom-color: ${theme.colors.light};
    border-bottom-width: 2px;

    width: 100%;
    height: ${ms(60)}px;
    margin-bottom: 8px;
    margin-top: 10px;
  `}
`;

export const BoxInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BoxIcon = styled.View`
  ${({theme}) => css`
    align-items: center;
    justify-content: center;
    width: ${ms(45)};
    height: ${ms(45)};
    background: ${theme.colors.light};
    border-radius: ${ms(12)}px;
    margin-right: 8px;
  `}
`;

export const BoxText = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 15px;
    font-weight: 700;
    color: #202024;
    margin-bottom: 4px;
  `}
`;

export const Subtitle = styled.Text`
  ${({theme}) => css`
    font-size: 14px;
    font-weight: 400;
    color: #666666;
  `}
`;

export const Price = styled.Text`
  ${({theme}) => css`
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.gray};
    margin-bottom: 4px;
  `}
`;

export const Date = styled.Text`
  ${({theme}) => css`
    font-size: 14px;
    font-weight: 400;
    color: #666666;
  `}
`;
