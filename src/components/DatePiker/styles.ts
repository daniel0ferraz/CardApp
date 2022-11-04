import {Dimensions} from 'react-native';
import {ms} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const DatePickerButton = styled.TouchableOpacity`
  ${({theme}) => css`
    width: 170px;
    border: ${ms(1)}px;
    height: 40px;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-left: ${theme.spacings[8]};
    padding-right: ${theme.spacings[8]};
    border-color: ${theme.colors.gray};
  `}
`;

export const DateText = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.gray2};
    font-size: 16px;
    font-weight: 300;
  `}
`;

export const DatePickerOverlay = styled.View`
  ${({theme}) => css`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    align-self: stretch;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    min-height: ${Dimensions.get('window').height}px;
    padding-left: ${theme.spacings[16]};
    padding-right: ${theme.spacings[16]};
    padding-top: ${theme.spacings[16]};
    padding-bottom: ${theme.spacings[16]};
  `}
`;

export const DatePickerWrapper = styled.View`
  ${({theme}) => css`
    width: 100%;
    background-color: #fff;
    padding-left: ${theme.spacings[16]};
    padding-right: ${theme.spacings[16]};
    padding-top: ${theme.spacings[16]};
    padding-bottom: ${theme.spacings[16]};
    border-radius: ${theme.radius[10]};
  `}
`;

export const DatePickerButtonModal = styled.TouchableOpacity`
  ${({theme}) => css`
    width: 100%;
    background-color: ${theme.colors.gray2};
    padding-left: ${theme.spacings[12]};
    padding-right: ${theme.spacings[12]};
    padding-top: ${theme.spacings[12]};
    padding-bottom: ${theme.spacings[12]};
    border-radius: ${theme.radius[10]};
    align-items: center;
    margin-top: ${ms(18)}px;
  `}
`;

export const DatePickerTextModal = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-size: 16px;
  `}
`;
