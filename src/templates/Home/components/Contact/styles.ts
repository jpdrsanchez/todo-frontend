import styled from 'styled-components'

export const Section = styled.section`
  padding: 178px 24px 38px;
`

export const Form = styled.form`
  background: var(--white);
  box-shadow: 0px 8px 16px rgba(6, 21, 43, 0.08);
  border-radius: 4px;
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 24px;
  position: relative;

  @media (min-width: 600px) {
    padding: 60px;
  }

  &::before {
    content: '';
    display: block;
    background: var(--green);
    width: 166px;
    height: 23px;
    position: absolute;
    top: 0;
    left: 28.57%;
    z-index: 700;
    transform: translateY(-50%);
  }
`

export const FormImage = styled.div`
  width: 191px;
  height: 191px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 800;
  transform: translateY(calc(-50% - 60px));
  margin: 0 auto;
  margin-bottom: -164px;
`

export const FormTitle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: var(--green);
    border-radius: 4px;
  }

  h3 {
    color: var(--black3);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.8125rem;

    span {
      display: block;
      font-weight: 700;
    }
  }
`

export const FormArea = styled.div`
  display: grid;
  gap: 24px 20px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 800px) {
    grid-column: 1fr 1fr;
  }

  & > * {
    &:first-child {
      @media (min-width: 800px) {
        grid-column: span 2;
      }
    }

    &:last-child {
      @media (min-width: 800px) {
        grid-column: span 2;
      }
    }
  }
`

export const Input = styled.div`
  position: relative;

  label {
    color: var(--black3);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    margin-bottom: 8px;
    display: block;
  }

  input,
  textarea {
    appearance: none;
    display: block;
    width: 100%;
    border: 1px solid var(--black3);
    border-radius: 4px;
    outline: 0;
    padding: 14px 15px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    color: var(--black3);
    resize: none;

    &::placeholder {
      color: var(--gray6);
    }
  }

  textarea {
    height: 150px;
  }

  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: #e5383b;

    @media (min-width: 600px) {
      position: absolute;
      bottom: 0;
      transform: translateY(100%);
    }
  }

  &.error {
    input,
    textarea {
      border-color: #e5383b;
    }
  }
`

export const SubmitButton = styled.button`
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  color: var(--white);
  padding: 16px;
  display: block;
  width: 100%;
  background: var(--green);
  border-radius: 4px;
  border: none;
  appearance: none;
  cursor: pointer;
  box-shadow: 0px 16px 24px rgba(6, 21, 43, 0.12);
`
