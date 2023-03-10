import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${(props) => props.theme['gray-900']};
`
export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NewTransactionsButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  font-weight: bold;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['green-500']};

  &:hover {
    transition: background 0.2s;
    background: ${(props) => props.theme['green-700']};
  }
`
