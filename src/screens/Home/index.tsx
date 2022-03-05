import React from 'react';
import Card from '../../components/Card';
import Input from '../../components/Input';

import IconUser from '../../assets/icon-user.svg';
import IconCode from '../../assets/icon-code.svg';
import IconDate from '../../assets/icon-date.svg';
import IconNumber from '../../assets/icon-number.svg';

import * as Styled from './styles';

export default function Home() {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Meu Cartão</Styled.Title>
        <Styled.Subtitle>Insira os dados do cartão</Styled.Subtitle>
      </Styled.Header>
      <Styled.Content>
        <Card />
        <Input
          placeholder="Nome do titular"
          icon={<IconUser fill="#6a189a" width={16} height={16} />}
        />
        <Input
          placeholder="Número do cartão"
          icon={<IconNumber fill="#6a189a" width={16} height={16} />}
        />

        <Styled.View>
          <Input
            placeholder="Validade"
            icon={<IconDate fill="#6a189a" width={16} height={16} />}
            width="45%"
          />
          <Input
            placeholder="CVV"
            icon={<IconCode fill="#6a189a" width={16} height={16} />}
            width="45%"
          />
        </Styled.View>
      </Styled.Content>

      <Styled.Button>
        <Styled.TextButton>Cadastrar</Styled.TextButton>
      </Styled.Button>
    </Styled.Container>
  );
}
