import React from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';
import { TransactionsCard } from '../../@types/TransactionsCard';
import Historico from '../Historico';

import IconError from '../../assets/icons/exclamation.svg';
import * as Styled from "./styles"
import moment from 'moment';
moment.locale('pt');

type PropsHistoric = {
  data: TransactionsCard[];
  nameFilter?: string | null;
};

export default function ListHistorico({ data, nameFilter }: PropsHistoric) {

  return (
    <View>
      <FlatList
        data={data}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: TransactionsCard) => String(item.id)}
        renderItem={({ item }) => (
          <Historico data={item} />
        )}
      />

      {data.length === 0 && (
        <>
          <Styled.BoxError>
            <IconError width={200} height={60} />
            <Styled.Date>{moment().format('DD/MM/YYYY')}</Styled.Date>
            <Styled.ErrorData>
              Nenhum {nameFilter && nameFilter + ` no`} extrato encontrado.
            </Styled.ErrorData>
          </Styled.BoxError>
        </>
      )}
    </View>
  );
}