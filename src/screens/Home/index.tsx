import React, { useEffect, useState } from 'react';

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

export default function Home() {
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

  useEffect(() => {
    // listTransactionsCards();
    // lastMovimentations();
  }, [])
  return (

    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Meus Cartões</Styled.Title>
        <Styled.Subtitle>{dataCard.length} ativos.</Styled.Subtitle>
      </Styled.Header>

      <Styled.BoxCards>
        <CardSlider data={cardsMock} />
      </Styled.BoxCards>

      <Styled.Content>
        <Styled.BoxNewExtract>
          <Styled.TitleExtract>Movimentações</Styled.TitleExtract>
          <Styled.NewExtract>
            <Adicionar />
          </Styled.NewExtract>
        </Styled.BoxNewExtract>

        <Styled.View>
          <ListHistorico data={dataTransactionsMock} />
        </Styled.View>

      </Styled.Content>
    </Styled.Container>

  );
}
