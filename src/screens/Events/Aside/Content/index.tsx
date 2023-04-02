import { filters } from '@constants';
import React from 'react';
import { TextContainer } from '../styles';
import { FilterContainer, FilterList, FilterText, FilterTitle } from './styles';

const Content: React.FC<{
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  filter: string[];
}> = ({ setFilter, filter }) => {
  const handleFilter = (newFilter: string) => {
    if (!filter?.includes(newFilter)) {
      if (!filter) {
        setFilter([newFilter]);
      }
      setFilter(sel => [...sel, newFilter]);
    } else {
      if (filter) {
        setFilter(sel => sel.filter(fi => fi !== newFilter));
      }
    }
  };

  return (
    <TextContainer>
      <FilterTitle>POR CATEGORIA</FilterTitle>
      <FilterList accessibilityHint="Lista de filtros">
        {filters.map(filt => (
          <FilterContainer
            key={filt.id}
            accessibilityHint="Filtro"
            onPress={() => handleFilter(filt.slug)}
            selected={filter?.includes(filt.slug)}>
            <FilterText testID="filtro" accessibilityHint={filt.slug}>
              {filt.name}
            </FilterText>
          </FilterContainer>
        ))}
      </FilterList>
    </TextContainer>
  );
};

export default Content;
