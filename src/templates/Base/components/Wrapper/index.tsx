import React from 'react'

import * as S from './styles'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper = (props: WrapperProps) => {
  return (
    <S.Wrapper>
      <S.WrapperBg src="/images/arrow-bg.svg" alt="" aria-hidden="true" />
      {props.children}
    </S.Wrapper>
  )
}
export default Wrapper
