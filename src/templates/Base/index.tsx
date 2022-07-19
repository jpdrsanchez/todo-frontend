import React from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Wrapper from './components/Wrapper'

interface BaseTemplateProps {
  children: React.ReactNode
}

const BaseTemplate = (props: BaseTemplateProps) => {
  return (
    <Wrapper>
      <Header />
      {props.children}
      <Footer />
    </Wrapper>
  )
}

export default BaseTemplate
