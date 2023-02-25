import { filters } from '@constants';
import React from 'react';
import { TextContainer } from '../styles';
import {
  FilterButton,
  FilterContainer,
  FilterList,
  FilterText,
  FilterTitle,
} from './styles';

const Content: React.FC<{
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ setFilter }) => {
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);
  const [isFiltered, setIsFiltered] = React.useState<boolean>(false);

  const handleFilter = (newFilter: string) => {
    if (!selectedFilters.includes(newFilter)) {
      setSelectedFilters(sel => [...sel, newFilter]);
    } else if (!isFiltered) {
      setSelectedFilters(sel => sel.filter(filter => filter !== newFilter));
    }
  };

  const handleApplyFilter = () => {
    if (selectedFilters.length > 0 && !isFiltered) {
      setFilter(selectedFilters);
      setIsFiltered(true);
    } else {
      setSelectedFilters([]);
      setFilter(undefined);
      setIsFiltered(false);
    }
  };
  return (
    <TextContainer>
      <FilterTitle>POR CATEGORIA</FilterTitle>
      <FilterList accessibilityHint="Lista de filtros">
        {filters.map(filter => (
          <FilterContainer
            key={filter.id}
            accessibilityHint="Filtro"
            onPress={() => handleFilter(filter.slug)}
            selected={selectedFilters.includes(filter.slug)}
            disabled={isFiltered}>
            <FilterText testID="filtro" accessibilityHint={filter.slug}>
              {filter.name}
            </FilterText>
          </FilterContainer>
        ))}
      </FilterList>
      <FilterButton
        accessibilityHint="Botão de filtro"
        onPress={handleApplyFilter}>
        {isFiltered ? (
          <FilterText>Limpar</FilterText>
        ) : (
          <FilterText>Aplicar</FilterText>
        )}
      </FilterButton>
    </TextContainer>
  );
};

export default Content;
