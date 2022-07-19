import React from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'

interface BaseTemplateProps {
  children: React.ReactNode
}

const BaseTemplate = (props: BaseTemplateProps) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default BaseTemplate
