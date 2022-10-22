import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as  Styled from './styles';
import { formatToBRL } from 'brazilian-values';
import { TransactionsCard } from '../../@types/TransactionsCard';
// Logo Category
import IconMercado from '../../assets/icons/icon-store.svg';
import IconRoupas from '../../assets/icons/tshirt.svg';
import IconAlimentacao from '../../assets/icons/utensils.svg';
import IconBebida from '../../assets/icons/wine.svg';
import IconSaude from '../../assets/icons/saude.svg';
import Alert from '../../assets/icons/exclamation.svg';

type Props = {
  data: TransactionsCard;
}

export default function Historico({ data }: Props) {



  const iconBuy = (data: { category: string }) => {
    switch (data?.category) {
      case 'Mercado': {
        return <IconMercado />;
      }
      case 'Roupas': {
        return <IconRoupas />;
      }

      case 'Alimentação': {
        return <IconAlimentacao />;
      }

      case 'Bar': {
        return <IconBebida />;
      }

      case 'Bebidas': {
        return <IconBebida />;
      }

      case 'Saúde': {
        return <IconSaude />;
      }


      default:
        return <Alert />;


    }
  }


  return (
    <>
      <Styled.ContentItens>
        <Styled.BoxInfo>
          <Styled.BoxIcon>
            {iconBuy({ category: data?.category })}
          </Styled.BoxIcon>

          <Styled.BoxText>
            <Styled.Title>{data?.name}</Styled.Title>
            <Styled.Subtitle>{data?.category}</Styled.Subtitle>
          </Styled.BoxText>
        </Styled.BoxInfo>

        <Styled.BoxText>
          <Styled.Price>{formatToBRL(-data?.value)}</Styled.Price>
          <Styled.Date>{data?.date}</Styled.Date>
        </Styled.BoxText>



      </Styled.ContentItens>
    </>
  );
}