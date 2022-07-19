import type { NextPage } from 'next'

import BaseTemplate from 'templates/Base'
import HomeTemplate from 'templates/Home'

const HomePage: NextPage = () => {
  return (
    <BaseTemplate>
      <HomeTemplate />
    </BaseTemplate>
  )
}

export default HomePage
