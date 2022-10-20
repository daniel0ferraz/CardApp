import React, { useState } from 'react';

import IconLeft from '../../assets/icons/angle-left.svg'
import Input from '../../components/Input';

import IconLoja from '../../assets/icons/store.svg'
import { api } from '../../services/api';
import { TransactionsCard } from '../../@types/TransactionsCard';
import * as Styled from './styles';
import Select from '../../components/Select';
import { selectMock } from '../Home/data';

export default function RegisterExtract() {

  const [extract, setExtract] = useState<TransactionsCard>({
    id: 0,
    name: '',
    category: '',
    value: 0.0,
    date: Date(),
    card_id: 0
  } as TransactionsCard);


  const registerExtract = () => {
    setExtract(extract)
  }

  console.log("Extrato", extract);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Registrar gasto</Styled.Title>
      </Styled.Header>


      <Styled.Content>
        {/* <Styled.View> */}

        <Input
          placeholder="Nome do estabelecimento"
          value={extract.name}
          onChangeText={text => {
            setExtract({ ...extract, name: text });
          }}
          icon={<IconLoja fill="#6a189a" width={25} height={25} />}
        />

        <Styled.Space>
          <Select
            text='Selecione'
            options={selectMock}
            onChangeSelect={(id, name) => {
              setExtract({ ...extract, card_id: id });
            }} />
        </Styled.Space>
        {/* </Styled.View> */}

        {/* <Styled.View>
          <Input
            placeholder="Valor"
            value={extract.value}
            type="custom"
            options={{
              mask: '99/99',
            }}
            mask
            onChangeText={text => {
              setExtract({ ...extract, value: text });
            }}
            icon={<IconLoja fill="#6a189a" width={25} height={25} />}
            width="45%"
          />
          <Input
            placeholder="Data"
            value={extract.date}
            type="custom"
            options={{
              mask: '00/00/0000',
            }}
            mask
            onChangeText={text => {
              setExtract({ ...extract, date: text });
            }}
            icon={<IconLoja fill="#6a189a" width={25} height={25} />}
            width="45%"
          />
        </Styled.View> */}
      </Styled.Content>


    </Styled.Container>
  );
}