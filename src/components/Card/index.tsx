import React from 'react';

import * as Styled from './styles';

export default function Card({data, back, icon}) {
  return (
    <Styled.Container>
      <Styled.Content>
        {
          // se  o fundo for true exiba
          back ? (
            <Styled.Strip>
              <Styled.TextCVV>{data.cvv}</Styled.TextCVV>
            </Styled.Strip>
          ) : (
            <Styled.ViewInformation>
              <Styled.View>
                <Styled.Text bold fontSize="18px">
                  {data.number}
                </Styled.Text>
                <Styled.Text fontSize="16px">{data.name}</Styled.Text>
                <Styled.Text fontSize="12px">{data.validate}</Styled.Text>
              </Styled.View>
              {icon && icon}
            </Styled.ViewInformation>
          )
        }
      </Styled.Content>
    </Styled.Container>
  );
}
