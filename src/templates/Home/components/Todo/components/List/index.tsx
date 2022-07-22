import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { v4 as uuid } from 'uuid'
import { DtoTask } from 'services/api/tasks/dtoGetTasksResponse'
import Item from './components/Item'
import { listContent, ListTypes } from './constants'
import * as S from './styles'

export interface ListProps {
  type: ListTypes
  tasks: DtoTask[]
}

const List = (props: ListProps) => {
  // Pedaço de código necessário para a lib funcionar no strict mode
  const [enabled, setEnabled] = React.useState(false)

  React.useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))

    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  if (!enabled) {
    return null
  }

  const content = listContent[props.type]
  return (
    <S.Wrapper type={props.type}>
      <h3>{content.title}</h3>
      <p
        dangerouslySetInnerHTML={{
          __html: content.description(props.tasks?.length)
        }}
      />
      <Droppable droppableId={props.type} key={uuid()}>
        {provided => (
          <S.List
            ref={provided.innerRef}
            key={uuid()}
            {...provided.droppableProps}
          >
            {props.tasks.map(task => (
              <Draggable
                draggableId={`${task.id}`}
                index={task.order}
                key={task.id}
              >
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Item done={task.status === 'DONE'} title={task.title} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </S.List>
        )}
      </Droppable>
    </S.Wrapper>
  )
}

export default List
