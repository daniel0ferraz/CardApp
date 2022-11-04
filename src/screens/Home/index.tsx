import React, { useCallback, useEffect, useState } from 'react';


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
import { formatToBRL } from 'brazilian-values';
import CategoriasFilter from '../../components/CategoriasFilter';
import CardFilter from '../../components/CardFilter';
import DateFilter from '../../components/DateFilter';
// Icons
import IconUSDGreen from '../../assets/icons/usd_green.svg';
import IconUSDRed from '../../assets/icons/usd_red.svg';

import IconFilter from '../../assets/icons/filter.svg';
import Adicionar from '../../assets/icons/plus.svg';




export default function Home() {
  const [dataCard, setDataCard] = useState<Card[]>([]);
  const [dataTransactions, setDataTransactions] = useState<TransactionsCard[]>([]);


  // Filtros
  const [openFilter, setOpenFilter] = useState(false)
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filterCard, setFilterCard] = useState<number | null>(null);

  // Lista transações de cartoes
  const listCards = async () => {
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
      if (!response) {
        return 'error';
      } else {
        setDataTransactions(response.data)
      }
    } catch (error: any) {
      console.log('error', error.message);
    }
  }

  const filtroCategoria = (name: string) => {
    if (filterCategory !== null) {
      return filterCategory === name;
    }
    return true;
  }


  const filtroCartao = (id: number) => {
    if (filterCard !== null) {
      lastMovimentations();
      return filterCard === id;
    }
    return true;
  }


  useFocusEffect(
    useCallback(() => {
      listCards();
      lastMovimentations();
    }, [])
  );

  // useEffect(() => {
  //   listCards();
  //   lastMovimentations();
  // }, [])

  // // useEffect(
  // //   async(() => {

  // //     const filtraListaCartao = dataTransactions.filter((item) => filtroCartao(item.card_id) && filtroCategoria(item.category))
  // //     setDataTransactions(filtraListaCartao)

  // //     console.log("filterCategory", filterCategory)
  // //     console.log("FilterCard", filterCard)

  // //     if (!filterCategory || filterCategory) {
  // //       lastMovimentations();
  // //     }
  // //     console.log(filtraListaCartao.length)

  // //     setOpenFilter(false)
  // //   }, [filterCard, filterCategory]))



  useEffect(() => {
    (async () => {
      const filtraListaCartao = dataTransactions.filter((item) => {

        filtroCartao(item.card_id) && filtroCategoria(item.category)

      })
      setDataTransactions(filtraListaCartao)
      setOpenFilter(false)
    })();
  }, [filterCard, filterCategory]);



  let totalMoney = 3134.79

  const gastos = totalMoney - sum;
  console.log(gastos)

  return (

    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Meus Cartões</Styled.Title>
        <Styled.Subtitle>{dataCard.length} ativos.</Styled.Subtitle>
      </Styled.Header>

      <Styled.BoxCards>
        <CardSlider data={dataCard} />
      </Styled.BoxCards>


      <Styled.InfoExpenses>

        <Styled.BoxInfo>
          <Styled.BoxIcon>
            <IconUSDGreen width={25} height={25} />
            <Styled.TextBoxIcon>Entradas</Styled.TextBoxIcon>
          </Styled.BoxIcon>
          <Styled.TextInfo>{formatToBRL(totalMoney)}</Styled.TextInfo>
        </Styled.BoxInfo>

        <Styled.BoxInfo>
          <Styled.BoxIcon>
            <IconUSDRed width={25} height={25} />
            <Styled.TextBoxIcon>Despesa</Styled.TextBoxIcon>
          </Styled.BoxIcon>
          <Styled.TextInfo>{formatToBRL(gastos)}</Styled.TextInfo>
        </Styled.BoxInfo>
      </Styled.InfoExpenses>

      <Styled.Content>
        <Styled.BoxNewExtract>
          <Styled.TitleExtract> Movimentações</Styled.TitleExtract>
          <Styled.NewExtract onPress={() => setOpenFilter(!openFilter)}>
            <IconFilter width={20} />
            <Styled.TitleBtnExtract>Filtrar</Styled.TitleBtnExtract>
          </Styled.NewExtract>

        </Styled.BoxNewExtract>
        <View>
          {openFilter && (
            <>
              <View>
                <DateFilter />
              </View>
              <View>
                <CategoriasFilter
                  filterCategory={filterCategory}
                  setFilterCategory={setFilterCategory}
                />
                <CardFilter
                  filterCard={filterCard}
                  setFilterCard={setFilterCard}
                />
              </View>
            </>
          )}
        </View>


        <Styled.View>
          <ListHistorico data={dataTransactions} nameFilter={filterCategory} />
        </Styled.View>

      </Styled.Content>
    </Styled.Container >

  );
}
