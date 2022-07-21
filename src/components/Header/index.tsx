import Image from 'next/image'
import Link from 'next/link'
import { VscLoading } from 'react-icons/vsc'

import * as S from './styles'
import Button from 'components/Button'
import Modal from 'components/Modal'
import Login from './components/Login'

interface HeaderProps {
  isLoggedIn: boolean
  isLoading: boolean
}

const Header = (props: HeaderProps) => {
  return (
    <>
      <Login />
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
              <span className="visually-hidden">
                Coopers Digital Production
              </span>
            </a>
          </Link>
          <Button onClick={() => {}} size="small">
            {props.isLoading && <VscLoading />}
            {!props.isLoading && !props.isLoggedIn && 'entrar'}
            {props.isLoggedIn && 'sair'}
          </Button>
        </S.HeaderContainer>
      </S.Header>
    </>
  )
}

export default Header
