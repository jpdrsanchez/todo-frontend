import React from 'react'

import * as S from './styles'

interface CenterProps {
  children: React.ReactNode
}

const Center = (props: CenterProps) => {
  return <S.Center>{props.children}</S.Center>
}

export default Center
