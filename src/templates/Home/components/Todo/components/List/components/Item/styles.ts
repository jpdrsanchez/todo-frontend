import styled, { css } from 'styled-components'

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  position: relative;

  &:hover {
    & > button {
      opacity: 1;
      pointer-events: initial;
    }
  }
`

export const CheckItem = styled.label`
  position: relative;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: 2px solid var(--secondary);
    border-radius: 50%;

    & > * {
      opacity: 0;
      pointer-events: none;
    }
  }

  input {
    &:checked {
      & + div {
        border-color: var(--gray);

        & > * {
          opacity: 1;
        }
      }
    }
  }
`

export const CompleteItem = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface TextItemProps {
  active?: boolean
}

export const TextItem = styled.span<TextItemProps>`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  ${props =>
    props.active &&
    css`
      font-weight: 700;
    `}
  max-width: 220px;
  display: block;
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
  }
`

export const DeleteButton = styled.button`
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.5rem;
  color: var(--gray3);
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0;
  appearance: none;
  background: none;
  border: none;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
`
