import Image from 'next/image'
import * as S from './styles'
import useLocalForm from './useLocalForm'

const Contact = () => {
  const localForm = useLocalForm()
  return (
    <S.Section>
      <h2 className="visually-hidden">Contato</h2>
      <S.Form onSubmit={localForm.handleSubmit(localForm.onSubmit)}>
        <S.FormImage>
          <Image
            src="/images/contact-main.png"
            alt="Contact"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
        </S.FormImage>
        <S.FormTitle>
          <span>
            <img src="/images/contact-icon.svg" alt="" aria-hidden="true" />
          </span>
          <h3>
            Get In <span>Touch</span>
          </h3>
        </S.FormTitle>
        <S.FormArea>
          <S.Input className={localForm.formState.errors.name ? 'error' : ''}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              placeholder="type your name here..."
              {...localForm.register('name')}
            />
            {localForm.formState.errors.name && (
              <span>{localForm.formState.errors.name.message}</span>
            )}
          </S.Input>
          <S.Input className={localForm.formState.errors.email ? 'error' : ''}>
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email"
              placeholder="example@example.com"
              {...localForm.register('email')}
            />
            {localForm.formState.errors.email && (
              <span>{localForm.formState.errors.email.message}</span>
            )}
          </S.Input>
          <S.Input
            className={localForm.formState.errors.telephone ? 'error' : ''}
          >
            <label htmlFor="telephone">Telephone*</label>
            <input
              type="text"
              id="telephone"
              placeholder="( ) _____-_____"
              {...localForm.register('telephone')}
            />
            {localForm.formState.errors.telephone && (
              <span>{localForm.formState.errors.telephone.message}</span>
            )}
          </S.Input>
          <S.Input
            className={localForm.formState.errors.message ? 'error' : ''}
          >
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              placeholder="Type what you want to say to us"
              {...localForm.register('message')}
            ></textarea>
            {localForm.formState.errors.message && (
              <span>{localForm.formState.errors.message.message}</span>
            )}
          </S.Input>
        </S.FormArea>
        <S.SubmitButton>Send Now</S.SubmitButton>
      </S.Form>
    </S.Section>
  )
}
export default Contact
