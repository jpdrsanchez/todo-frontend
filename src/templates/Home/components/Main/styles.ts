import Container from 'components/Container'
import styled, { css } from 'styled-components'

export const Main = styled.main`
  padding-top: 156px;
  margin-bottom: -75px;

  @media (max-width: 1023px) {
    text-align: center;
  }
`

export const MainContainer = styled(Container)`
  gap: 30px;
  padding-bottom: 45px;
  z-index: 700;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1300px) {
    align-items: flex-start;
  }
`

interface MainImageProps {
  mobile?: boolean
}

export const MainImage = styled.div<MainImageProps>`
  ${props =>
    props.mobile &&
    css`
      margin-bottom: 30px;

      @media (min-width: 1024px) {
        display: none;
      }
    `}

  ${props =>
    !props.mobile &&
    css`
      @media (max-width: 1023px) {
        display: none;
      }
    `}
`

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 3.5rem;

  @media (min-width: 600px) {
    font-size: 5rem;
  }

  @media (min-width: 1300px) {
    margin-top: 3.25rem;
  }

  span {
    display: block;
    color: var(--primary);
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.2;

    @media (min-width: 600px) {
      font-size: 3.75rem;
      line-height: 4rem;
    }
  }
`

export const MainText = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 2.75rem;

  @media (min-width: 600px) {
    font-size: 1.5rem;
    line-height: 1;
  }
`

export const MainLink = styled.a`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  text-align: center;
  color: var(--white);
  padding: 17px 10px 18px;
  display: block;
  max-width: 300px;
  border-radius: 0.625rem;
  background: var(--primary);

  @media (max-width: 1023px) {
    margin: 0 auto;
  }
`
