import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    width: 100%;

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

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #ffffff;
  align-items: center;
`;

export const View = styled.View`
  /* flex: 1; */
  /* width: 100%; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Space = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
`;
