import React from 'react';

import Calendar from '../../assets/icons/calendar.svg'
import * as Styled from '../CategoriasFilter/styles';

export default function DateFilter() {
  return (
    <Styled.BoxFilter>
      <Styled.NewExtract onPress={() => { }}>
        <Calendar width={22} height={20} />
        <Styled.TitleBtnExtract>Data</Styled.TitleBtnExtract>
      </Styled.NewExtract>


      {/* <Styled.Category>
        <Styled.BoxCategory
          onPress={() => console.log("Data")}
        >
          <Styled.TextCategory >{ }Oii</Styled.TextCategory>
        </Styled.BoxCategory>

      </Styled.Category> */}
    </Styled.BoxFilter>
  );
}