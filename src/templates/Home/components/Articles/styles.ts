import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 68px;
  margin-bottom: 176px;

  h2 {
    font-weight: 600;
    font-size: 3rem;
    line-height: 1.1;
    position: relative;
    z-index: 500;
    color: var(--white);
    padding-top: 80px;
    padding-left: 20px;
    padding-bottom: 40px;

    @media (max-width: 799px) {
      padding-right: 20px;
      text-align: center;
    }

    @media (min-width: 800px) {
      padding-left: 80px;
      margin-right: 140px;
    }

    @media (min-width: 1300px) {
      margin-left: 60px;
    }

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 520px;
      position: absolute;
      z-index: -1;
      background: var(--primary);
      border-radius: 10px;
      top: 0;
      left: 0;
    }
  }
`

export const CarouselWrapper = styled.div`
  position: relative;
  z-index: 600;

  @media (min-width: 1300px) {
    padding-left: 140px;
  }
`
