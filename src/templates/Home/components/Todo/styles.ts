import styled, { keyframes } from 'styled-components'

export const shimmer = keyframes`
  0% {
        background-position: -1200px 0;
  }
  100% {
        background-position: 1200px 0;
  }
`

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

export const TasksIntro = styled.div`
  background: url('/images/tasks-bg.svg') no-repeat top 24px left;
  background-size: auto;
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

export const LoadingListWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 450px;
`

export const LoadingList = styled.div`
  animation-duration: 2.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmer};
  animation-timing-function: linear;
  background: #ddd;
  background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
  background-size: 1200px 100%;
  box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const LoginText = styled.p`
  text-align: center;
  padding-bottom: 60px;
  padding-top: 40px;
  color: var(--black);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;

  button {
    display: inline;
    padding: 0;
    appearance: none;
    border: none;
    background: none;
    outline: 0;
    color: var(--primary);
    cursor: pointer;
  }
`
