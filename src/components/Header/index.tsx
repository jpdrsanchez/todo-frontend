import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'
import Button from 'components/Button'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Link href="/" passHref>
          <a>
            <Image
              src="/images/logo.png"
              alt="Logotipo Coopers Digital Production"
              width={217}
              height={50}
            />
            <span className="visually-hidden">Coopers Digital Production</span>
          </a>
        </Link>
        <Button onClick={() => {}} size="small">
          entrar
        </Button>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
