import React, { useState } from 'react';

import Input from '../../components/Input';
import { TransactionsCard } from '../../@types/TransactionsCard';
import * as Styled from './styles';
import Select from '../../components/Select';
import { CategoryMock, cardsFilter } from '../Home/data';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
//icones
import IconLeft from '../../assets/icons/angle-left.svg'
import IconLoja from '../../assets/icons/store.svg'
import Calendario from '../../assets/icons/calendar.svg'
import Money from '../../assets/icons/usd.svg'
import Categorias from '../../assets/icons/categoria.svg'
import Cartao from '../../assets/icons/card.svg';
import IconGoback from '../../assets/icons/long-arrowleft.svg'
import IconExtract from '../../assets/icons/receipt.svg'
import IconX from '../../assets/icons/x.svg'
//


import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { api } from '../../services/api';
import Date from '../../components/Input/Date';
import { parseToNumber } from 'brazilian-values';

export default function RegisterExtract() {

  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const [extract, setExtract] = useState<TransactionsCard>({
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
        extract.date === ''
      ) {
        Alert.alert("Preencha todos os Campos!!")
        return;
      }
      const response = await api.post('/transactionsCards', {
        name: extract.name,
        category: extract.category,
        value: parseToNumber(extract.value),
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
          navigation.navigate('Home')
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

          <Styled.BoxHeader>
            <Styled.Box>
              <IconExtract width={25} />
            </Styled.Box>
            <View>
              <Styled.TitleHeader>Novo Gasto</Styled.TitleHeader>
            </View>
          </Styled.BoxHeader>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconX width={25} height={25} />
          </TouchableOpacity>
        </Styled.ButtonsContainer>

        <Input
          placeholder="Estabelecimento"
          value={extract.name}
          onChangeText={text => {
            setExtract({ ...extract, name: text });
          }}
          // icon={<IconLoja width={23} height={25} />}
          keyboardType='default'
          autoCapitalize='none'
        />


        <Input
          placeholder='Valor da compra'
          value={String(extract.value)}
          onChangeText={(text) => {
            setExtract({ ...extract, value: text });
          }}
          icon={<Money width={25} height={25} />}
          keyboardType='numeric'
          autoCapitalize='none'
        />


        <Styled.Space>
          <Select
            text='Cartão'
            options={cardsFilter}
            onChangeSelect={(id, name) => {
              setExtract({ ...extract, card_id: id });
            }}
            icon={<Cartao width={25} height={25} />}
          />
        </Styled.Space>

        <Styled.Space>
          <Select
            text='Categoria'
            options={CategoryMock}

            onChangeSelect={(id, name) => {
              setExtract({ ...extract, category: name });
            }}
            icon={<Categorias width={25} height={25} />}
          />
        </Styled.Space>



        <Date
          placeholder='Data'
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY',

          }}
          value={extract.date}
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