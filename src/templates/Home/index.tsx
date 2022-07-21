import { HomePageProps } from 'pages'
import Main from './components/Main'
import Todo from './components/Todo'

const HomeTemplate = (props: HomePageProps) => {
  return (
    <>
      <Main />
      <Todo />
    </>
  )
}
export default HomeTemplate
