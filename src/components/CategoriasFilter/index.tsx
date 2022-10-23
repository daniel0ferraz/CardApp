import React, { useState } from 'react';


import { useTheme } from 'styled-components';

import { CategoryMock } from "../../screens/Home/data"
import Categorias from '../../assets/icons/categoria.svg'
import * as Styled from './styles'

type ICategorias = typeof CategoryMock[0]
export type Props = {
  filtroCategoria: string | null;
  setFiltroCategoria: React.Dispatch<React.SetStateAction<string | null>>
}

export default function CategoriasFilter({ filtroCategoria, setFiltroCategoria }: Props) {

  const [open, setOpen] = useState(false);

  const colors = useTheme()

  const selectFilter = (opcao: ICategorias) => {
    if (filtroCategoria === opcao.name) {
      return setFiltroCategoria(null);
    }
    return setFiltroCategoria(opcao.name);
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
                style={{ backgroundColor: filtroCategoria === opcao.name ? '#3C3C3C' : colors.colors.red }}
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