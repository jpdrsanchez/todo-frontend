import React from 'react'

import * as S from './styles'

export interface ButtonProps {
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  size?: 'small' | 'default'
}

const Button = (props: ButtonProps) => {
  return (
    <S.Button onClick={props.onClick} size={props.size}>
      {props.children}
    </S.Button>
  )
}

export default Button
