import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 599px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 600px) {
    max-width: 560px;
  }

  @media (min-width: 800px) {
    max-width: 740px;
  }

  @media (min-width: 1024px) {
    max-width: 980px;
  }

  @media (min-width: 1300px) {
    max-width: 1280px;
  }
`
