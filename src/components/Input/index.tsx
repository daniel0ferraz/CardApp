import React, {ReactElement} from 'react';
import * as Styled from './styles';

interface propsInput {
  width?: string;
  icon: ReactElement | false;
  placeholder: string;
  mask?: boolean;
  value: string;
  type?: any;
  options?: any;
  onChangeText: (text: string) => void;
}

export default function Input({
  width,
  icon,
  placeholder,
  mask,
  value,
  type,
  options,
  onChangeText,
}: propsInput) {
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
