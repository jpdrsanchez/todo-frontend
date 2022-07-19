import styled, { css } from 'styled-components'
import { ListProps } from '.'

interface WrapperProps extends Pick<ListProps, 'type'> {}

export const Wrapper = styled.div.attrs<WrapperProps>(({ type }) => {
  type || 'TODO'
})<WrapperProps>`
  background: var(--white);
  box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.2);
  padding: 60px 28px 40px 23px;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;

    ${props => {
      if (props.type === 'TODO')
        return css`
          background: var(--secondary);
        `
      if (props.type === 'DONE')
        return css`
          background: var(--primary);
        `
    }}
  }

  h3 {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 1.5rem;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    text-align: center;
    margin-bottom: 1.875rem;

    strong {
      font-weight: 700;
    }
  }
`

export const List = styled.ul`
  display: grid;
  gap: 20px;
`
