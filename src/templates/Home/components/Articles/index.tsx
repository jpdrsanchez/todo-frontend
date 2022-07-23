import Container from 'components/Container'
import Carousel from './components/Carousel'
import * as S from './styles'

const Articles = () => {
  return (
    <S.Section>
      <Container>
        <h2>good things</h2>
        <S.CarouselWrapper>
          <Carousel />
        </S.CarouselWrapper>
      </Container>
    </S.Section>
  )
}

export default Articles
