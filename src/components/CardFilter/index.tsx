import React, { useState } from 'react';
import { cardsFilter } from '../../screens/Home/data';
import * as Styled from './styles'
import { useTheme } from 'styled-components';

import Cartao from '../../assets/icons/card.svg';
import { ScrollView } from 'react-native';

type ICardsFilter = typeof cardsFilter[0]
export type Props = {
  filterCard: number | null;
  setFilterCard: React.Dispatch<React.SetStateAction<number | null>>
}

export default function CardFilter({ filterCard, setFilterCard }: Props) {
  const [open, setOpen] = useState(false);
  const THEME = useTheme()

  const selectFilter = (opcao: ICardsFilter) => {
    if (filterCard === opcao.id) {
      return setFilterCard(null);
    }
    return setFilterCard(opcao.id);
  }
  const colorCard = (cardsFilter: { name: string }) => {
    switch (cardsFilter.name) {
      case 'Nubank': {
        return '#530082'
      }
      case 'PicPay': {
        return '#202024'
      }

      case 'Next': {
        return '#00ff5f'
      }

      case 'Iti': {
        return '#FE3386'
      }

      case 'Neon': {
        return '#0f92ff'
      }

    }
  }
  return (
    <ScrollView style={{ width: '100%' }}>

      <Styled.BoxFilter>


        <Styled.NewExtract onPress={() => setOpen(!open)}>
          <Cartao width={22} height={20} />
          <Styled.TitleBtnExtract>Cartão</Styled.TitleBtnExtract>
        </Styled.NewExtract>

        {
          open && (
            <Styled.Category>
              {cardsFilter.map((opcao) => (
                <Styled.BoxCategory
                  style={{ backgroundColor: colorCard({ name: opcao.name }) }}
                  key={opcao.id}
                  onPress={() => selectFilter(opcao)}
                >
                  <Styled.TextCategory >{opcao.name}</Styled.TextCategory>
                </Styled.BoxCategory>
              ))}
            </Styled.Category>
          )
        }


      </Styled.BoxFilter>
    </ScrollView>
  )
}