import styled, {css} from 'styled-components/native';
import {BtnProps} from './index';

type Props = Pick<BtnProps, 'color' | 'size' | 'textColor'>;

const modifiersButton = {
  // Type Buttons -> colors

  yellow: () => css`
    background-color: ${({theme}) => theme.colors.yellow};
  `,

  blue: () => css`
    background-color: ${({theme}) => theme.colors.blue};
  `,

  white: () => css`
    background-color: ${({theme}) => theme.colors.white};
  `,

  black: () => css`
    background-color: ${({theme}) => theme.colors.dark};
  `,

  // Color Text
  blueText: () => css`
    color: ${({theme}) => theme.colors.secondaryDarken1};
  `,

  whiteText: () => css`
    color: ${({theme}) => theme.colors.white};
  `,

  blackText: () => css`
    color: ${({theme}) => theme.colors.dark};
  `,

  //Size Buttons
  larger: () => css`
    width: 180px;
    height: ${({theme}) => theme.utils.moderate(28)};
  `,

  medium: () => css`
    width: 141px;
    height: ${({theme}) => theme.utils.moderate(28)};
  `,

  xmedium: () => css`
    width: 67px;
    height: ${({theme}) => theme.utils.moderate(32)};
  `,

  small: () => css`
    width: 91px;
    height: ${({theme}) => theme.utils.moderate(28)};
  `,
};

export const Button = styled.TouchableOpacity<Props>`
  ${({theme, color, size}) => css`
    justify-content: center;
    align-items: center;
    border-radius: ${theme.radius[15]};

    ${!!color && modifiersButton[color]}
    ${!!size && modifiersButton[size]}
  `}
`;

export const TextButton = styled.Text<Props>`
  ${({theme, textColor}) => css`
    font-weight: 600;

    ${!!textColor && modifiersButton[textColor]}
  `}
`;
