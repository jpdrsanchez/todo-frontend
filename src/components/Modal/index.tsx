import React from 'react'
import * as S from './styles'
import useOutsideClick from './useOutsideClick'

interface ModalProps {
  visible: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  description?: string
}

const Modal = (props: ModalProps) => {
  const outsideClick = useOutsideClick(props.onClose)

  React.useEffect(() => {
    if (props.visible) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [props.visible])

  return (
    <S.Modal onClick={outsideClick.handleOutsideClick} visible={props.visible}>
      <S.ModalBody
        role="dialog"
        aria-modal="true"
        aria-labelledby={props.title}
        aria-describedby={props.description}
      >
        {props.children}
      </S.ModalBody>
    </S.Modal>
  )
}

export default Modal
