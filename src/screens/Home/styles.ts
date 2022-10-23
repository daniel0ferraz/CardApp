import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';
import {ms} from 'react-native-size-matters';

const {height} = Dimensions.get('window');

export const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    width: 100%;
    height: ${height}px;

    /* justify-content: space-between; */
    /* align-items: center; */
    background: ${theme.colors.light};
  `}
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 5px;
  padding-top: 10px;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: #2c2c2c;
`;

export const Subtitle = styled.Text`
  font-size: 15;
  font-weight: 400;
  color: #2c2c2c;
`;

export const BoxCards = styled.View`
  padding-bottom: 15px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #ffffff;
  align-items: center;
`;

export const BoxNewExtract = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const TitleExtract = styled.Text`
  ${({theme}) => css`
    font-weight: 700;
    font-size: 20px;
    color: ${theme.colors.gray};
  `}
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
  `}
`;

export const TitleBtnExtract = styled.Text`
  ${({theme}) => css`
    font-weight: 700;
    font-size: 16px;
    color: ${theme.colors.gray};
  `}
`;

export const View = styled.View`
  flex: 1;
  width: 100%;
`;
