import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    /* flex: 1; */
    width: 100%;
    /* padding: 15px; */
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

export const Content = styled.View`
  width: 100%;
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: #ffffff;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

export const RowItens = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
`;

export const Space = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  ${({theme}) => css`
    margin-top: 30px;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.gray};
  `}
`;

export const TitleBtn = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #dddddd;
`;
