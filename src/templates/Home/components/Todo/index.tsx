import Container from 'components/Container'
import List from './components/List'
import { ListTypes } from './components/List/constants'
import * as S from './styles'

export interface Task {
  id: number
  title: string
  order: number
  status: keyof typeof ListTypes
}

const tasks: Task[] = [
  {
    id: 1,
    title: 'Send a gift to the client',
    order: 1,
    status: 'DONE'
  },
  {
    id: 2,
    title: 'Create a Google Drive folder',
    order: 2,
    status: 'DONE'
  },
  {
    id: 3,
    title: 'E-mail John about the deadline',
    order: 3,
    status: 'DONE'
  },
  {
    id: 4,
    title: 'Home Page Design ',
    order: 4,
    status: 'DONE'
  },
  {
    id: 5,
    title: 'Get FTP credentials',
    order: 5,
    status: 'DONE'
  },
  {
    id: 6,
    title: 'This item label may be edited',
    order: 1,
    status: 'TODO'
  },
  {
    id: 7,
    title: 'Checked item goes to Done list',
    order: 2,
    status: 'TODO'
  },
  {
    id: 8,
    title: 'Erase all',
    order: 3,
    status: 'TODO'
  },
  {
    id: 9,
    title: 'Delete itens',
    order: 4,
    status: 'TODO'
  },
  {
    id: 10,
    title: 'Add new tasks',
    order: 5,
    status: 'TODO'
  },
  {
    id: 11,
    title: 'Create the drag-and-drop function',
    order: 6,
    status: 'TODO'
  },
  {
    id: 12,
    title: 'Develop the To-do list page',
    order: 7,
    status: 'TODO'
  }
]

const Todo = () => {
  return (
    <S.Todo>
      <S.TodoIntro>
        <Container>
          <h2>To-do List</h2>
          <p>
            Drag and drop to set your main priorities, check when done and
            create what´s new.
          </p>
        </Container>
      </S.TodoIntro>
      <Container>
        <S.ListWrapper>
          <List
            type={ListTypes.TODO}
            tasks={tasks.filter(task => task.status === ListTypes.TODO)}
          />
          <List
            type={ListTypes.DONE}
            tasks={tasks.filter(task => task.status === ListTypes.DONE)}
          />
        </S.ListWrapper>
      </Container>
    </S.Todo>
  )
}

export default Todo
