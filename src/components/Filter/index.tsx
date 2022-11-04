import React, { useState } from 'react';

import { Text, TouchableOpacity, View, } from 'react-native';
import IconFilter from '../../assets/icons/filter.svg';

import * as Styled from './styles';
import DatePicker from '../DatePiker/index';
import CategoriasFilter from '../CategoriasFilter';
import CardFilter from '../CardFilter';
type FilterOptionsState = 'Data' | 'Categoria' | 'Cartão' | undefined;

type IPropsFilter = {
  filterCategory: string | null;
  setFilterCategory: React.Dispatch<React.SetStateAction<string | null>>

  filterCard: number | null;
  setFilterCard: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filter({ filterCategory, setFilterCategory, filterCard, setFilterCard }: IPropsFilter) {
  const [openFilter, setOpenFilter] = useState(false);
  const [filterOption, setFilterOption] = useState<FilterOptionsState>();
  return (
    <><Styled.Wrapper>
      <Styled.NewExtract onPress={() => setOpenFilter(!openFilter)}>
        <IconFilter width={20} />
        <Styled.TitleBtnExtract>{filterOption ? filterOption : 'Filtrar'}</Styled.TitleBtnExtract>
      </Styled.NewExtract>

      {openFilter && (
        <>
          <Styled.FilterOptionsWrappper>
            <Styled.NewExtract
              onPress={() => {
                setOpenFilter(!openFilter);
                setFilterOption('Data');
              }}>
              <Text>Data</Text>
            </Styled.NewExtract>

            <Styled.NewExtract
              onPress={() => setFilterOption('Cartão')}>
              <Text>Cartão</Text>
            </Styled.NewExtract>

            <Styled.NewExtract
              onPress={() => setFilterOption('Categoria')}>
              <Text>Categoria</Text>
            </Styled.NewExtract>
          </Styled.FilterOptionsWrappper>
        </>
      )}
    </Styled.Wrapper><View>
        {filterOption === 'Data' && !openFilter && (
          <>
            <DatePicker dateSelected={(date) => {
              console.log(date);
            }} />
            <TouchableOpacity onPress={() => {
              setFilterOption('');
              setOpenFilter(true);
            }}>
              <Text>Voltar</Text>
            </TouchableOpacity>
          </>
        )}


        {filterOption === 'Categoria' && !openFilter && (
          <>
            <TouchableOpacity onPress={() => {
              setFilterOption('');
              setOpenFilter(true);
            }}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <CategoriasFilter
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory} />
          </>
        )}



        {filterOption === 'Cartão' && !openFilter && (
          <>
            <CardFilter
              filterCard={filterCard}
              setFilterCard={setFilterCard} />
            <TouchableOpacity onPress={() => {
              setFilterOption('');
              setOpenFilter(true);
            }}>
              <Text>Voltar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </>

  );

}
