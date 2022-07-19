import Center from 'components/Center'
import Image from 'next/image'

import * as S from './styles'

const Main = () => {
  return (
    <S.Main>
      <S.MainContainer>
        <div>
          <S.MainTitle>
            Organize
            <br />
            <span>your daily jobs</span>
          </S.MainTitle>
          <S.MainImage mobile>
            <Image
              src="/images/home-main.jpg"
              alt="Foto de um escritório"
              width={443}
              height={482}
            />
          </S.MainImage>
          <S.MainText>The only way to get things done</S.MainText>
          <S.MainLink href="#todo">Go to To-do list</S.MainLink>
        </div>
        <S.MainImage>
          <Image
            src="/images/home-main.jpg"
            alt="Foto de um escritório"
            width={443}
            height={482}
          />
        </S.MainImage>
      </S.MainContainer>
      <Center>
        <Image
          src="/images/icon-scroll.svg"
          alt="Scroll to next section"
          width={25}
          height={42}
        />
      </Center>
    </S.Main>
  )
}

export default Main
