import Image from 'next/image'
import Link from 'next/link'
import { VscLoading } from 'react-icons/vsc'

import * as S from './styles'
import Button from 'components/Button'
import Login from 'components/Login'
import useVisibility from 'hooks/useVisibility'
import useAuth from 'hooks/useAuth'

interface HeaderProps {
  isLoggedIn: boolean
  isLoading: boolean
}

const Header = (props: HeaderProps) => {
  const visibility = useVisibility()
  const auth = useAuth()

  return (
    <>
      <Login visible={visibility.visible} onClose={visibility.hide} />
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
          {props.isLoading && (
            <Button onClick={() => {}} size="small">
              <VscLoading />
            </Button>
          )}
          {!props.isLoading && !props.isLoggedIn && (
            <Button onClick={visibility.show} size="small">
              login
            </Button>
          )}
          {props.isLoggedIn && (
            <Button onClick={auth.logout} size="small">
              exit
            </Button>
          )}
        </S.HeaderContainer>
      </S.Header>
    </>
  )
}

export default Header
