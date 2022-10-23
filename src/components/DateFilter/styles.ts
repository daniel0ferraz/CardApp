import {ms} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const BoxFilter = styled.View`
  ${({theme}) => css`
    width: 100%;
    align-items: center;

    background: ${theme.colors.white};
    padding: 5px;
    border-radius: 8px;
    margin-bottom: 10px;
  `}
`;

export const BoxFilterText = styled.Text`
  color: #3c3c3c;
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 15px;
`;

export const NewExtract = styled.TouchableOpacity`
  ${({theme}) => css`
    flex-direction: row;
    width: 120px;
    height: 38px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.light};
    /* margin-bottom: 36px; */
  `}
`;

export const TitleBtnExtract = styled.Text`
  ${({theme}) => css`
    font-weight: 700;
    font-size: 16px;
    color: ${theme.colors.gray};
    margin-left: 3px;
  `}
`;

export const Category = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BoxCategory = styled.TouchableOpacity`
  ${({theme}) => css`
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 40px;

    border-radius: 8px;
    margin-bottom: 5px;
    padding: 2px;
  `}
`;
export const TextCategory = styled.Text`
  ${({theme}) => css`
    font-weight: 700;
    color: ${theme.colors.light}
    font-size: ${ms(11)}px;
  `}
`;
