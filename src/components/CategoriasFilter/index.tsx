import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { CategoryMock } from "../../screens/Home/data"
import Categorias from '../../assets/icons/categoria.svg'
import * as Styled from './styles'

type ICategorias = typeof CategoryMock[0]
export type Props = {
  filterCategory: string | null;
  setFilterCategory: React.Dispatch<React.SetStateAction<string | null>>
}

export default function CategoriasFilter({ filterCategory, setFilterCategory }: Props) {

  const [open, setOpen] = useState(false);

  const colors = useTheme()

  const selectFilter = (opcao: ICategorias) => {
    if (filterCategory === opcao.name) {
      return setFilterCategory(null);
    }
    return setFilterCategory(opcao.name);
  }
  return (
    <>
      <Styled.BoxFilter>


        <Styled.NewExtract onPress={() => setOpen(!open)}>
          <Categorias width={22} height={20} />
          <Styled.TitleBtnExtract>Categoria</Styled.TitleBtnExtract>
        </Styled.NewExtract>

        {open && (
          <Styled.Category>
            {CategoryMock.map((opcao) => (
              <Styled.BoxCategory
                style={{ backgroundColor: filterCategory === opcao.name ? '#3C3C3C' : colors.colors.red }}
                key={opcao.id}
                onPress={() => selectFilter(opcao)}
              >
                <Styled.TextCategory >{opcao.name}</Styled.TextCategory>
              </Styled.BoxCategory>
            ))}
          </Styled.Category>
        )}
      </Styled.BoxFilter>
    </>
  );
}