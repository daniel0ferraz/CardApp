import React, { useState } from 'react';

import Input from '../../components/Input';

import IconLeft from '../../assets/icons/angle-left.svg'
import IconLoja from '../../assets/icons/store.svg'
import Calendario from '../../assets/icons/calendar.svg'
import Money from '../../assets/icons/usd.svg'
import { api } from '../../services/api';
import { TransactionsCard } from '../../@types/TransactionsCard';
import * as Styled from './styles';
import Select from '../../components/Select';
import { selectMock } from '../Home/data';
import { View, Text } from 'react-native';

export default function RegisterExtract() {

  const [extract, setExtract] = useState<TransactionsCard>({
    id: 0,
    name: '',
    category: '',
    value: 0.0,
    date: '',
    card_id: 0
  } as TransactionsCard);


  const registerExtract = async () => {

    try {
      const response = await api.post('/transactionsCards', {
        name: extract.name,
        category: extract.category,
        value: extract.value,
        date: extract.date,
        card_id: extract.card_id
      })
      if (response) {
        setExtract(extract)
        console.log("response", response.data)
      } else {
        console.log(response)
      }
    }
    catch (error) {
      console.log(error)
    }
  }



  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Registrar gasto</Styled.Title>
      </Styled.Header>


      <Styled.Content>


        <Input
          placeholder="Estabelecimento"
          value={extract.name}
          onChangeText={text => {
            setExtract({ ...extract, name: text });
          }}
          icon={<IconLoja width={23} height={25} />}
          keyboardType='default'
          autoCapitalize='none'
        />

        <Styled.Space>
          <Select
            text='Selecione'
            options={selectMock}
            onChangeSelect={(id, name) => {
              setExtract({ ...extract, card_id: id });
            }} />
        </Styled.Space>

        <Input
          placeholder="Valor"
          value={extract.value}
          onChangeText={(text) => {
            setExtract({ ...extract, value: text });
          }}
          icon={<Money width={25} height={25} />}
          keyboardType='numeric'
        />

        <Input
          placeholder="Data"
          onChangeText={text => {
            setExtract({ ...extract, date: text });
          }}
          icon={<Calendario width={28} height={25} />}
        />




        <Styled.Button onPress={registerExtract}>
          <Styled.TitleBtn>Registrar</Styled.TitleBtn>
        </Styled.Button>

      </Styled.Content>
    </Styled.Container>
  );
}