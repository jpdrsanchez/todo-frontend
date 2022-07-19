import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`

export const WrapperBg = styled.img`
  position: absolute;
  top: 24px;
  left: calc(50% + 110px);
  z-index: 600;
  pointer-events: none;

  @media (max-width: 1023px) {
    display: none;
  }
`
