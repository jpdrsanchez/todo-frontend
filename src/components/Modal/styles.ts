import styled, { css, keyframes } from 'styled-components'

export const show = keyframes`
  to {
    opacity: 1;
  }
`

interface ModalProps {
  visible: boolean
}

export const Modal = styled.div<ModalProps>`
  z-index: 1001;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow: auto;
  padding: 30px 24px;
  background: rgba(12, 12, 12, 0.8);
  width: 100%;

  ${props =>
    !props.visible &&
    css`
      display: none;
    `}

  ${props =>
    props.visible &&
    css`
      display: flex;
      animation: ${show} 0.5s forwards;
    `}
`

export const ModalBody = styled.div`
  width: 100%;
  max-width: 932px;
  background: var(--white);
  margin: auto;
`
