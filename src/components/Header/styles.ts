import Container from 'components/Container'
import styled from 'styled-components'

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 970;
  padding-top: 54px;
`

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px 30px;

  @media (min-width: 800px) {
    align-items: center;
  }
`
