/* eslint-disable prettier/prettier */
import React from 'react';
/* eslint-disable react-native/no-inline-styles */
import { Dimensions, FlatList, View, Text, ProgressBarAndroidBase } from 'react-native';
import { formatToBRL } from 'brazilian-values';
import { Card } from '../../@types/Card';
import * as Progress from 'react-native-progress';
import * as Styled from './style';

// Logos cards 
import IconIti from "../../assets/cards/icon-iti.svg";
import IconNeon from "../../assets/cards/icon-neon.svg";
import IconNext from "../../assets/cards/icon-next.svg";
import IconNubank from "../../assets//cards/icon-nubank.svg";
import IconPicPay from '../../assets/cards/icon-picpay.svg';
// Logo brands
import IconMastercard from '../../assets/brands/mastercard.svg';
import IconVisa from '../../assets/brands/visa.svg'


type PropsCardlider = {
  data: Card[];
};


const { width } = Dimensions.get('window');

export default function CardSlider({ data }: PropsCardlider) {


  const iconCard = (data: { name: string }) => {
    switch (data.name) {
      case 'Nubank': {
        return <IconNubank width={28} height={25} />;
      }
      case 'Iti': {
        return <IconIti width={20} height={20} />;
      }

      case 'Neon': {
        return <IconNeon width={25} height={25} />;
      }

      case 'PicPay': {
        return <IconPicPay width={55} height={28} />;
      }

      case 'Neon': {
        return <IconNeon />;
      }

      case 'Next': {
        return <IconNext width={36} height={25} />;
      }

      default:
        return <IconNext width={25} height={25} />;
    }
  }


  const iconBrand = (data: { brand: string }) => {
    switch (data.brand) {
      case 'Visa': {
        return <IconVisa width={36} height={25} />;
      }

      case 'Mastercard': {
        return <IconMastercard width={36} height={25} />;
      }

      default:
        return 'Não encontado';
    }
  }



  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item: Card) => String(item?.id)}
        showsHorizontalScrollIndicator={false}
        snapToOffsets={[...Array(data.length)].map(
          (x, i) => i * (width * 0.8 - 25) + (i - 1) * 25,
        )}
        horizontal
        snapToAlignment="start"
        scrollEventThrottle={16}
        decelerationRate="fast"
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: item ? item.color : '#66666',
              height: width / 2.2,
              width: width * 0.8 - 20,
              marginHorizontal: 10,
              borderRadius: 12,
            }}>
            <View style={{ padding: 15 }}>

              <Styled.CardHeader>
                <Styled.CardName>
                  {iconCard({ name: item.name }) || "nao"}
                </Styled.CardName>

                <View>
                  <Styled.CardBrand>
                    {iconBrand({ brand: item.brand }) || "nao"}
                  </Styled.CardBrand>
                </View>
              </Styled.CardHeader>

              <Styled.CardInfo>
                <Styled.Fature>Fatura atual</Styled.Fature>
                <Styled.ValueFature>
                  {formatToBRL(item?.credito) || 0}
                </Styled.ValueFature>
              </Styled.CardInfo>

              <View style={{ marginTop: 20 }}>
                <Styled.CardInfoLimit>
                  <View>
                    <Styled.TextLimit>
                      Limite disponivel
                    </Styled.TextLimit>

                    <Styled.ValueLimit>
                      {formatToBRL(item?.limitCredit - item.credito) || 0}
                    </Styled.ValueLimit>
                  </View>


                  <Styled.BoxDate>
                    <Styled.TextLimit>
                      Vencimento
                    </Styled.TextLimit>

                    <Styled.ValueLimit>
                      {item?.datePayment}
                    </Styled.ValueLimit>
                  </Styled.BoxDate>


                </Styled.CardInfoLimit>

              </View>
            </View>
          </View>
        )
        }
      />
    </>
  );
}
