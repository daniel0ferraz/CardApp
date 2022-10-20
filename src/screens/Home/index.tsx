import React, { useCallback, useEffect, useState } from 'react';

import Input from '../../components/Input';

import IconUser from '../../assets/icon-user.svg';
import IconCode from '../../assets/icon-code.svg';
import IconDate from '../../assets/icon-date.svg';
import IconNumber from '../../assets/icon-number.svg';

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

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [dataCard, setDataCard] = useState<Card[]>([]);
  const [dataTransactions, setDataTransactions] = useState<TransactionsCard[]>([]);

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


  useFocusEffect(
    useCallback(() => {
      listTransactionsCards();
      lastMovimentations();
    }, [])
  );
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
          <Styled.NewExtract onPress={() => navigation.navigate('RegisterExtract')}>
            <Adicionar />
          </Styled.NewExtract>
        </Styled.BoxNewExtract>

        <Styled.View>
          <ListHistorico data={dataTransactions} />
        </Styled.View>

      </Styled.Content>
    </Styled.Container>

  );
}
