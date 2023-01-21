import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  gap: 1rem;
  display: flex;

  input {
    flex: 1;
    padding: 1rem;

    border: 0;
    border-radius: 6px;

    color: ${(props) => props.theme['gray-300']};
    background: ${(props) => props.theme['gray-900']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    gap: 0.75rem;
    padding: 1rem;

    display: flex;
    align-items: center;

    font-weight: bold;

    border: 0;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['green-300']};

    background: transparent;
    color: ${(props) => props.theme['green-300']};

    &:hover {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['green-500']};
      border: 1px solid ${(props) => props.theme['green-500']};

      transition: background 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
