import Image from 'next/image'

import Modal from 'components/Modal'
import * as S from './styles'
import useLoginForm from './useLoginForm'

interface LoginProps {
  visible: boolean
  onClose: () => void
}

const Login = (props: LoginProps) => {
  const form = useLoginForm(props.onClose)
  return (
    <Modal
      visible={props.visible}
      onClose={props.onClose}
      title="modal_title"
      description="modal_description"
    >
      <S.CloseButton type="button" onClick={props.onClose}>
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
          <S.Form onSubmit={form.handleSubmit(form.onSubmit)}>
            <div>
              <label htmlFor="username">User:</label>
              <input
                type="text"
                id="username"
                {...form.register('username')}
                className={form.errors.username ? 'error' : ''}
              />
              {form.errors.username && <p>{form.errors.username.message}</p>}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                {...form.register('password')}
                className={form.errors.password ? 'error' : ''}
              />
              {form.errors.password && <p>{form.errors.password.message}</p>}
            </div>
            <button type="submit" disabled={form.isSubmitting}>
              {form.isSubmitting ? 'Signing In' : 'Sign in'}
            </button>
          </S.Form>
        </S.Content>
      </S.Wrapper>
    </Modal>
  )
}

export default Login
