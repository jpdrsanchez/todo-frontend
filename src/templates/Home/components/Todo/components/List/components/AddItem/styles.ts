import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  position: relative;
`

export const CheckItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 2px solid var(--secondary);
  border-radius: 50%;
`

export const InputItem = styled.form`
  input {
    display: block;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    max-width: 200px;
    appearance: none;
    width: 100%;
    border: none;
    background: none;
    padding: 0;
    outline: 0px;
    color: var(--secondary);

    &::placeholder {
      color: var(--secondary);
    }
  }
`
