import React, { useEffect, useState } from 'react';

import {
  Text,
  View
} from 'react-native';

import * as Styled from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Card } from '../../@types/Card';
import ArrowLeft from '../../assets/icons/angle-left.svg';
import ListHistorico from '../../components/ListHistorico/index';
import { api } from '../../services/api';
import { TransactionsCard } from '../../@types/TransactionsCard';
import { formatToBRL } from 'brazilian-values';
import Toast from 'react-native-toast-message';
import Adicionar from '../../assets/icons/plus.svg';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';
import Historico from '../../components/Historico/index';

export default function ExtractCard() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute();
  const params = route?.params?.item as Card | any;

  const [historicData, setHistoricData] = useState<TransactionsCard[]>([]);


  const lastMovimentations = async () => {
    try {
      const response = await api.get('/transactionsCards?card_id=' + params.id);
      if (!response) {
        Toast.show({
          type: 'error',
          text1: 'Erro ao carregar informações.',
          position: 'top',
          keyboardOffset: 10,
          visibilityTime: 10000,
          topOffset: 10
        });

        return 'error';
      } else {
        setHistoricData(response.data)
        console.log('data', response.data)

        return response;
      }
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: error.message,
        position: 'top',
        keyboardOffset: 10,
        visibilityTime: 10000,
        topOffset: 10
      });

      console.log('error', error.message);
    }
  }

  useEffect(() => {
    lastMovimentations()
  }, [])

  return (
    <>
      <Styled.Container>
        <Styled.BoxGoback>
          <Styled.BtnGoback onPress={() => navigation.goBack()}>
            <ArrowLeft width={25} height={30} />
          </Styled.BtnGoback>
          <Styled.TitleCard>{params.name} Card</Styled.TitleCard>
        </Styled.BoxGoback>

        <Toast />
        <Styled.Card color={params.color}>

          <Styled.CardHeader>
            <Text>{params.namePropiety}</Text>
            <Text>{params.brand}</Text>
          </Styled.CardHeader>

          <Styled.CardSaldo>
            <Styled.Fature>Saldo</Styled.Fature>
            <Styled.ValueFature>{formatToBRL(params.debit)}</Styled.ValueFature>
          </Styled.CardSaldo>

          <Styled.CardInfoLimit>
            <View>
              <Styled.Fature>Fatura atual</Styled.Fature>
              <Styled.TextLimit>{formatToBRL(params.credito)}</Styled.TextLimit>
            </View>
          </Styled.CardInfoLimit>
        </Styled.Card>


        <Styled.Content>

          <Styled.BoxNewExtract>
            <Styled.TitleExtract>Historico</Styled.TitleExtract>

            <Styled.NewExtract onPress={() => navigation.navigate('RegisterExtract')}>
              <Adicionar width={22} />
              <Styled.TitleBtnExtract>Adicionar</Styled.TitleBtnExtract>
            </Styled.NewExtract>
          </Styled.BoxNewExtract>


          <Styled.ViewHistoric>
            <ListHistorico data={historicData} />
          </Styled.ViewHistoric>
        </Styled.Content>
      </Styled.Container>
    </>
  );
}