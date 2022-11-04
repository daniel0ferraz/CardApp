import styled, {css} from 'styled-components/native';

export const Wrapper = styled.View`
  background: red;
`;
export const FilterOptionsWrappper = styled.View``;

export const NewExtract = styled.TouchableOpacity`
  ${({theme}) => css`
    flex-direction: row;
    width: 120px;
    height: 38px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.light};
    margin-bottom: 5px;
  `}
`;

export const TitleBtnExtract = styled.Text`
  ${({theme}) => css`
    font-weight: 700;
    font-size: 16px;
    color: ${theme.colors.gray};
  `}
`;
