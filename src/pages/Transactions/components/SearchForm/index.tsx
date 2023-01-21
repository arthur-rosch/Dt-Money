import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por Transações" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscas
      </button>
    </SearchFormContainer>
  )
}
