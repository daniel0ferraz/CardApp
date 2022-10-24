import styled, {css} from 'styled-components/native';
import {ms} from 'react-native-size-matters';

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardName = styled.View``;

export const CardBrand = styled.View``;

export const CardInfo = styled.View`
  flex-direction: column;
  padding-top: ${ms(20)}px;
`;

export const Fature = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.light};
    font-weight: 500;
  `}
`;

export const ValueFature = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 22px;
  `}
`;

export const CardInfoLimit = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextLimit = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.light};
    font-weight: 300;
    font-size: 13px;
    padding-bottom: 2px;
  `}
`;

export const ValueLimit = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.light};
    font-weight: 300;
    font-size: 14px;
    font-weight: 700;
  `}
`;

export const BoxDate = styled.View`
  align-items: flex-end;
`;
