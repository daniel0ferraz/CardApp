import React, { useCallback, useEffect, useState } from 'react';

import IconFilter from '../../assets/icons/filter.svg';
import Adicionar from '../../assets/icons/plus.svg';
import * as Styled from './styles';

import { Card } from '../../@types/Card';
import { TransactionsCard } from '../../@types/TransactionsCard';
import { api } from '../../services/api';
import { cardsMock, dataTransactionsMock } from "./data"
import CardSlider from '../../components/CardSlider';
import ListHistorico from '../../components/ListHistorico';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TouchableOpacity, Text, View } from 'react-native';
import { Category } from '../../@types/Filter';
import moment from 'moment';
import CategoriasFilter from '../../components/CategoriasFilter';



export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [dataCard, setDataCard] = useState<Card[]>([]);
  const [dataTransactions, setDataTransactions] = useState<TransactionsCard[]>([]);


  // Filtros
  const [openFilter, setOpenFilter] = useState(false)
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null);

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
      const response = await api.get("/transactionsCards");
      if (!response.data) {
        return 'error';
      } else {
        setDataTransactions(response.data)
        return response.data;
      }
    } catch (error: any) {
      console.log('error', error.message);
    }
  }

  console.log('filtroCategoria', filtroCategoria)

  const testaFiltro = (name: string) => {
    if (filtroCategoria !== null) {
      return filtroCategoria === name;
    }
    return true;
  }

  useFocusEffect(
    useCallback(() => {
      listTransactionsCards();
      lastMovimentations();
    }, [])
  );

  useEffect(() => {
    const novaLista = dataTransactions.filter(item => testaFiltro(item.category))

    setDataTransactions(novaLista)
    setOpenFilter(false)
  }, [filtroCategoria])

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

          <Styled.NewExtract onPress={() => navigation.navigate('RegisterExtract')}>
            <Adicionar />
          </Styled.NewExtract>
        </Styled.BoxNewExtract>

        {openFilter && (
          <>
            <CategoriasFilter
              filtroCategoria={filtroCategoria}
              setFiltroCategoria={setFiltroCategoria}
            />
          </>
        )}

        <Styled.View>
          <ListHistorico data={dataTransactions} nameFilter={filtroCategoria} />
        </Styled.View>

      </Styled.Content>
    </Styled.Container >

  );
}
