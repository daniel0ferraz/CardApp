import {Dimensions} from 'react-native';
import {ms} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

type Props = {
  color: string;
};

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

export const BoxGoback = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const BtnGoback = styled.TouchableOpacity`
  align-items: center;
  padding-right: 5px;
`;

export const TitleCard = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.gray};
    font-size: 20px;
    font-weight: 700;
    font-style: normal;
  `}
`;

export const Card = styled.View<Props>`
  ${({theme, color}) => css`
    width: 100%;
    height: ${ms(195)}px;
    background: ${color ? color : theme.colors.red};
    border-radius: 8px;
    padding: 15px;
  `}
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 20px;
`;

export const CardSaldo = styled.View`
  padding-top: 15px;
  padding-bottom: 20px;
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

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #ffffff;
  align-items: center;
  margin-top: 15px;
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
    padding-left: 2px;
  `}
`;

export const ViewHistoric = styled.View`
  flex: 1;
  width: 100%;
`;
