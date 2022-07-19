import React from 'react'

import * as S from './styles'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container = (props: ContainerProps) => {
  return <S.Container className={props.className}>{props.children}</S.Container>
}

export default Container
