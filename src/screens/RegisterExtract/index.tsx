import React, { useState } from 'react';

import Input from '../../components/Input';
import { TransactionsCard } from '../../@types/TransactionsCard';
import * as Styled from './styles';
import Select from '../../components/Select';
import { selectMock, selectCategoryMock, dataTransactionsMock } from '../Home/data';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
//icones
import IconLeft from '../../assets/icons/angle-left.svg'
import IconLoja from '../../assets/icons/store.svg'
import Calendario from '../../assets/icons/calendar.svg'
import Money from '../../assets/icons/usd.svg'
import Categorias from '../../assets/icons/categoria.svg'
import Cartao from '../../assets/icons/card.svg';
import IconGoback from '../../assets/icons/long-arrowleft.svg'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { api } from '../../services/api';

export default function RegisterExtract() {

  const navigation = useNavigation<NativeStackNavigationProp<any>>()

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
      if (extract.name === '' ||
        extract.category === '' ||
        extract.date === '') {
        Alert.alert("Preencha todos os Campos!!")
        return;
      }
      const response = await api.post('/transactionsCards', {
        name: extract.name,
        category: extract.category,
        value: extract.value,
        date: extract.date,
        card_id: extract.card_id
      })

      if (!response) {
        Alert.alert("Erro!");
        return
      } else {
        console.log(response)
        setExtract(extract)
        Alert.alert("Extrato registrado com sucesso!")
        setTimeout(() => {
          navigation.replace('Home')
        }, 1000)
      }
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <Styled.Container>
      {/* <Styled.Header>
        <Styled.Title>Registrar gasto</Styled.Title>
      </Styled.Header> */}


      <Styled.Content>
        <Styled.ButtonsContainer>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconGoback width={30} height={30} />
          </TouchableOpacity>
        </Styled.ButtonsContainer>

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
            text='Cartão'
            options={selectMock}
            onChangeSelect={(id, name) => {
              setExtract({ ...extract, card_id: id });
            }}
            icon={<Cartao width={25} height={25} />}
          />
        </Styled.Space>

        <Styled.Space>
          <Select
            text='Categoria'
            options={selectCategoryMock}

            onChangeSelect={(id, name) => {
              setExtract({ ...extract, category: name });
            }}
            icon={<Categorias width={25} height={25} />}
          />
        </Styled.Space>



        <Input
          placeholder="Digite o valor da compra"
          value={extract.value}
          onChangeText={(text) => {
            setExtract({ ...extract, value: text });
          }}
          icon={<Money width={25} height={25} />}
          keyboardType='numeric'
        />

        <Input
          placeholder="Data de compra"
          onChangeText={text => {
            setExtract({ ...extract, date: text });
          }}
          icon={<Calendario width={30} height={30} />}
        />





        <Styled.Button onPress={registerExtract}>
          <Styled.TitleBtn>Registrar</Styled.TitleBtn>
        </Styled.Button>


      </Styled.Content>


    </Styled.Container >
  );
}