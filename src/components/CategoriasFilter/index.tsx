import React from 'react';

import {
  Text,
  View
} from 'react-native';
import { useTheme } from 'styled-components';

import { CategoryMock } from "../../screens/Home/data"
import * as Styled from './styles'

type ICategorias = typeof CategoryMock[0]
export type Props = {
  filtroCategoria: string | null;
  setFiltroCategoria: React.Dispatch<React.SetStateAction<string | null>>
}

export default function CategoriasFilter({ filtroCategoria, setFiltroCategoria }: Props) {

  const colors = useTheme()

  const selectFilter = (opcao: ICategorias) => {
    if (filtroCategoria === opcao.name) {
      return setFiltroCategoria(null);
    }
    return setFiltroCategoria(opcao.name);
  }
  return (
    <>

      <Styled.Category>
        {CategoryMock.map((opcao) => (
          <Styled.BoxCategory
            style={{ backgroundColor: filtroCategoria === opcao.name ? colors.colors.orange : colors.colors.gray }}
            key={opcao.id}
            onPress={() => selectFilter(opcao)}
          >
            <Styled.TextCategory >{opcao.name}</Styled.TextCategory>
          </Styled.BoxCategory>
        ))}
      </Styled.Category>

    </>
  );
}