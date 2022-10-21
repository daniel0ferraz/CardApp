import React from 'react'
import { TextInputMaskProps } from 'react-native-masked-text';
import * as Styled from './styles';

type Props = TextInputMaskProps & {
  icon?: any,
}

export default function Date({
  icon,
  ...rest
}: Props) {
  return (
    <Styled.Container>
      {icon && icon}

      <Styled.Input
        {...rest}
      />

    </Styled.Container>
  );
}