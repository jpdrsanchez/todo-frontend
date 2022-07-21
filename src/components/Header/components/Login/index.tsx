import Image from 'next/image'

import Modal from 'components/Modal'
import * as S from './styles'

const Login = () => {
  return (
    <Modal
      visible={true}
      onClose={() => {}}
      title="modal_title"
      description="modal_description"
    >
      <S.CloseButton type="button" onClick={() => {}}>
        close
      </S.CloseButton>
      <S.Wrapper>
        <Image
          src="/images/login-illustration.png"
          alt="Desenho de mulher selecionando algo"
          width={231}
          height={231}
          quality={100}
        />
        <S.Content>
          <h2 id="modal_title">
            <span>Sign In</span>
            <span>To access your list</span>
          </h2>
          <S.Form onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor="username">User:</label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Sign in</button>
          </S.Form>
        </S.Content>
      </S.Wrapper>
    </Modal>
  )
}

export default Login
