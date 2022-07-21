import styled from 'styled-components'

export const CloseButton = styled.button`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 4rem;
  margin: 0 23px 12px auto;
  appearance: none;
  cursor: pointer;
  background: none;
  outline: 0px;
  border: none;
  padding: 0;
  display: block;
  text-align: right;
`

export const Wrapper = styled.div`
  padding: 0 52px 53px;
  display: flex;
  align-items: flex-start;
  gap: 42px;
`

export const Content = styled.div`
  padding-top: 45px;

  h2 {
    margin-bottom: 84px;

    span {
      display: block;

      &:nth-child(1) {
        font-weight: 700;
        font-size: 80px;
        line-height: 1;
      }

      &:nth-child(2) {
        font-weight: 300;
        font-size: 50px;
        line-height: 64px;
        color: var(--primary);
      }
    }
  }
`

export const Form = styled.form`
  max-width: 342px;

  div {
    position: relative;

    & + div {
      margin-top: 30px;
    }

    p {
      color: #db504a;
      font-size: 16px;
      line-height: 20px;
      bottom: 0;
      left: 0;
    }
  }

  label {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    display: block;
    margin-bottom: 3px;
  }

  input {
    display: block;
    width: 100%;
    appearance: none;
    font-size: 1.125rem;
    line-height: 1.5rem;
    border: 1px solid var(--gray2);
    border-radius: 10px;
    outline: 0px;
    padding: 14px;

    &.error {
      border-color: #db504a;
    }

    &:focus {
      border-color: var(--black);
    }
  }

  button {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    text-align: center;
    color: var(--white);
    padding: 18px 10px 17px;
    display: block;
    width: 100%;
    max-width: 300px;
    margin: 56px auto 0;
    cursor: pointer;
    border: none;
    appearance: none;
    background: var(--primary);
  }
`
