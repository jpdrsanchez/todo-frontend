import styled from 'styled-components'

export const Todo = styled.section`
  position: relative;
`

export const TodoIntro = styled.div`
  padding-top: 225px;
  padding-bottom: 236px;
  background: var(--black);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    height: 300px;
    width: 150%;
    position: absolute;
    pointer-events: none;
    top: -220px;
    left: -50px;
    transform: rotate(-4deg);
    background: var(--white);
  }

  &::after {
    content: '';
    display: block;
    height: 300px;
    width: 150%;
    position: absolute;
    pointer-events: none;
    bottom: -120px;
    left: -50px;
    transform: rotate(-4deg);
    background: var(--white);
  }

  h2 {
    color: var(--white);
    font-weight: 600;
    font-size: 3.75rem;
    line-height: 1;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: max-content;

    &::after {
      margin-top: 7px;
      margin-bottom: 34px;
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      background: var(--primary);
    }
  }

  p {
    color: var(--white);
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.8125rem;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
  }
`

export const ListWrapper = styled.div`
  display: grid;
  gap: 60px 20px;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 800px) {
    grid-template-columns: 380px 380px;
  }

  @media (min-width: 1024px) {
    gap: 40px;
  }
`
