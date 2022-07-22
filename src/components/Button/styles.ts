import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export interface ButtonStyleProps extends Pick<ButtonProps, 'size'> {}

export const Button = styled.button.attrs<ButtonStyleProps>(({ size }) => ({
  size: size || 'default'
}))<ButtonStyleProps>`
  appearance: none;
  border: none;
  display: block;
  width: 100%;
  outline: 0px;
  cursor: pointer;
  background: var(--black);
  color: var(--white);
  text-align: center;
  font-weight: 600;

  ${props => {
    if (props.size === 'default')
      return css`
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 1.8125rem;
        text-align: center;
        border-radius: 10px;
        padding: 18px 10px 17px;
        max-width: 300px;
        margin: 38px auto 0;
      `
    if (props.size === 'small')
      return css`
        font-size: 0.875rem;
        line-height: 1.3125rem;
        max-width: 120px;
        padding: 9px 10px 10px;
      `
  }}
`
