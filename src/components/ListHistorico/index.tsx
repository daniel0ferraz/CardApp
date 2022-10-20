import React from 'react';
import {
  FlatList,
  View
} from 'react-native';
import { TransactionsCard } from '../../@types/TransactionsCard';
import Historico from '../Historico';

type PropsHistoric = {
  data: TransactionsCard[];
};


export default function ListHistorico({ data }: PropsHistoric) {
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
    </View>
  );
}