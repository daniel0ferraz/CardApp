import React, { useCallback, useEffect, useState } from 'react';

import Input from '../../components/Input';

import IconUser from '../../assets/icon-user.svg';
import IconCode from '../../assets/icon-code.svg';
import IconDate from '../../assets/icon-date.svg';
import IconNumber from '../../assets/icon-number.svg';
import IconFilter from '../../assets/icons/filter.svg';

import * as Styled from './styles';
import { getBrand } from '../../components/Input/brand';
import { Card } from '../../@types/Card';
import { TransactionsCard } from '../../@types/TransactionsCard';
import { api } from '../../services/api';
import { cardsMock, dataTransactionsMock } from "./data"
import CardSlider from '../../components/CardSlider';
import ListHistorico from '../../components/ListHistorico';

import Adicionar from '../../assets/icons/plus.svg';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TouchableOpacity, Text, View } from 'react-native';

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [dataCard, setDataCard] = useState<Card[]>([]);
  const [dataTransactions, setDataTransactions] = useState<TransactionsCard[]>([]);

  const [openFilter, setOpenFilter] = useState(false)
  const [filter, setFilter] = useState({
    category: '',
    date: '',
    card_id: ''
  });


  // Lista transações de cartoes
  const listTransactionsCards = async () => {
    try {
      const response = await api.get('/cards');
      setDataCard(response.data)
    } catch (error: any) {
      console.log('error', error.message);
    };
  }

  // SomarValores
  const sum = dataCard.reduce((sum, item: Card) => sum + item.credito, 0);
  // Lista movimentações
  const lastMovimentations = async () => {
    try {
      const response = await api.get('/transactionsCards');
      if (!response.data) {
        return [];
      } else {
        setDataTransactions(response.data)
        return response.data;
      }
    } catch (error: any) {
      console.log('error', error.message);
    }
  }

  const filterTransactions = async () => {
    try {
      const response = await api.get(`/transactionsCards?date=${filter.date}`);
      if (!response.data) {
        return [];
      } else {
        setDataTransactions(response.data)
        return response.data;
      }
    } catch (error: any) {
      console.log('error', error.message);
    }
  }


  useFocusEffect(
    useCallback(() => {
      listTransactionsCards();
      if (!filter) {
        filterTransactions();
      }
    }, [])
  );

  useEffect(() => {
    if (filterTransactions) {
      filterTransactions();

    }
  }, [filter]);
  return (

    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Meus Cartões</Styled.Title>
        <Styled.Subtitle>{dataCard.length} ativos.</Styled.Subtitle>
      </Styled.Header>

      <Styled.BoxCards>
        <CardSlider data={dataCard} />
      </Styled.BoxCards>

      <Styled.Content>
        <Styled.BoxNewExtract>
          <Styled.TitleExtract>Movimentações</Styled.TitleExtract>
          <Styled.NewExtract onPress={() => setOpenFilter(!openFilter)}>
            <IconFilter />
          </Styled.NewExtract>
        </Styled.BoxNewExtract>

        {openFilter && (
          <>
            <View>
              <TouchableOpacity
                onPress={() => setFilter({ ...filter, category: '', date: '20/10/2022', card_id: '', })}>
                <Text>Data</Text>
              </TouchableOpacity>
            </View></>
        )}

        <Styled.View>
          <ListHistorico data={dataTransactions} />
        </Styled.View>

      </Styled.Content>
    </Styled.Container>

  );
}
