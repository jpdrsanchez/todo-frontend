import Articles from './components/Articles'
import Contact from './components/Contact'
import Main from './components/Main'
import Todo from './components/Todo'

const HomeTemplate = () => {
  return (
    <>
      <Main />
      <Todo />
      <Articles />
      <Contact />
    </>
  )
}
export default HomeTemplate
