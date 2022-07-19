import * as S from './styles'
import Container from 'components/Container'

const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <h3>Need help?</h3>
        <a href="mailto:coopers@coopers.pro">coopers@coopers.pro</a>
        <p>© 2021 Coopers. All rights reserved.</p>
      </Container>
      <S.FooterDetail />
    </S.Footer>
  )
}
export default Footer
