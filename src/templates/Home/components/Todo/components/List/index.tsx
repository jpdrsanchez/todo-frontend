import { Task } from '../..'
import Item from './components/Item'
import { listContent, ListTypes } from './constants'
import * as S from './styles'

export interface ListProps {
  type: ListTypes
  tasks: Task[]
}

const List = (props: ListProps) => {
  const content = listContent[props.type]
  return (
    <S.Wrapper type={props.type}>
      <h3>{content.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: content.description }} />
      <S.List>
        {props.tasks.map(task => (
          <Item
            done={task.status === 'DONE'}
            key={task.id}
            title={task.title}
          />
        ))}
      </S.List>
    </S.Wrapper>
  )
}

export default List
