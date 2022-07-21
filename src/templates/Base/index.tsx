import React from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Wrapper from './components/Wrapper'
import { HomePageProps } from 'pages'

interface BaseTemplateProps extends HomePageProps {
  children: React.ReactNode
}

const BaseTemplate = (props: BaseTemplateProps) => {
  return (
    <Wrapper>
      <Header isLoggedIn={!!props.user} isLoading={props.loading} />
      {props.children}
      <Footer />
    </Wrapper>
  )
}

export default BaseTemplate
