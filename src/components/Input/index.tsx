import React from 'react';
import * as Styled from './styles';

export default function Input({
  width,
  icon,
  placeholder,
  mask,
  value,
  type,
  options,
  onChangeText,
}) {
  return (
    <Styled.Container width={width}>
      {icon && icon}
      {mask ? (
        <Styled.MaskTextInput
          value={value}
          type={type}
          options={options}
          onChangeText={text => onChangeText(text)}
          placeholder={placeholder}
        />
      ) : (
        <Styled.TextInput
          value={value}
          onChangeText={text => onChangeText(text)}
          placeholder={placeholder}
        />
      )}
    </Styled.Container>
  );
}
