import useUser from 'hooks/useUser'
import { User } from 'interfaces/user'
import type { NextPage } from 'next'

import BaseTemplate from 'templates/Base'
import HomeTemplate from 'templates/Home'

export interface HomePageProps {
  user?: User
  loading: boolean
  error: boolean
}

const HomePage: NextPage = () => {
  const user = useUser()

  return (
    <BaseTemplate {...user}>
      <HomeTemplate {...user} />
    </BaseTemplate>
  )
}

export default HomePage
