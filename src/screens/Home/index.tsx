import React, {useState} from 'react';
import Card from '../../components/Card';
import Input from '../../components/Input';

import IconUser from '../../assets/icon-user.svg';
import IconCode from '../../assets/icon-code.svg';
import IconDate from '../../assets/icon-date.svg';
import IconNumber from '../../assets/icon-number.svg';

import * as Styled from './styles';
import {getBrand} from '../../components/Input/brand';

export default function Home() {
  const [icon, setIcon] = useState({icon: false});
  const [data, setData] = useState({
    name: '',
    number: '',
    validate: '',
    cvv: '',
  });
  return (
    <Styled.ScrollView>
      <Styled.Container>
        <Styled.Header>
          <Styled.Title>Meu Cartão</Styled.Title>
          <Styled.Subtitle>Insira os dados do cartão</Styled.Subtitle>
        </Styled.Header>
        <Styled.Content>
          <Card data={data} icon={icon?.icon} />
          <Input
            placeholder="Nome do titular"
            value={data.name}
            onChangeText={text => {
              setData({...data, name: text});
            }}
            icon={<IconUser fill="#6a189a" width={16} height={16} />}
          />
          <Input
            placeholder="Número do cartão"
            value={data.number}
            type="credit-card"
            mask
            onChangeText={(text: string) => {
              setData({...data, number: text});
              setIcon(getBrand(text));
            }}
            icon={<IconNumber fill="#6a189a" width={16} height={16} />}
          />

          <Styled.View>
            <Input
              placeholder="Validade"
              value={data.validate}
              type="custom"
              options={{
                mask: '99/99',
              }}
              mask
              onChangeText={text => {
                setData({...data, validate: text});
              }}
              icon={<IconDate fill="#6a189a" width={16} height={16} />}
              width="45%"
            />
            <Input
              placeholder="CVV"
              value={data.cvv}
              type="custom"
              options={{
                mask: '9999',
              }}
              mask
              onChangeText={text => {
                setData({...data, cvv: text});
              }}
              icon={<IconCode fill="#6a189a" width={16} height={16} />}
              width="45%"
            />
          </Styled.View>
        </Styled.Content>

        <Styled.Button>
          <Styled.TextButton>Cadastrar</Styled.TextButton>
        </Styled.Button>
      </Styled.Container>
    </Styled.ScrollView>
  );
}
