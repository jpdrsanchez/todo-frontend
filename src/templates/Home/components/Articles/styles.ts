import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 68px;
  margin-bottom: 176px;

  h2 {
    font-weight: 600;
    font-size: 3rem;
    line-height: 1.1;
    margin-left: 60px;
    margin-right: 140px;
    position: relative;
    z-index: 500;
    color: var(--white);
    padding-top: 80px;
    padding-left: 80px;
    padding-bottom: 40px;

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
  padding-left: 140px;
`
