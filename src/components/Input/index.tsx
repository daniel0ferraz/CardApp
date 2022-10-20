import React from 'react';
import { TextInputProps } from 'react-native';
import * as Styled from './styles';


type Props = TextInputProps & {
  icon?: any,
}

export default function Input({
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
