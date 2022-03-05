import React from 'react';
import * as Styled from './styles';

export default function Input({width, icon, placeholder}) {
  return (
    <Styled.Container width={width}>
      {icon && icon}
      <Styled.TextInput placeholder={placeholder} />
    </Styled.Container>
  );
}
