import React from 'react';
import * as Styled from './styles';

export type BtnProps = {
  children: React.ReactNode;
  color?: 'yellow' | 'blue' | 'white';
  size?: 'larger' | 'medium' | 'xmedium' | 'small';
  textColor?: 'whiteText' | 'blackText' | 'blueText';
  active?: boolean;
  onPress: () => void;
};

export default function Button({
  textColor,
  size,
  color,
  children,
  onPress,
}: BtnProps) {
  return (
    <Styled.Button color={color} size={size} onPress={onPress}>
      <Styled.TextButton textColor={textColor}>{children}</Styled.TextButton>
    </Styled.Button>
  );
}
