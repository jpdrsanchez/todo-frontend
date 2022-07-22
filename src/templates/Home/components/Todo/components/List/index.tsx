import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { v4 as uuid } from 'uuid'
import { DtoTask } from 'services/api/tasks/dtoGetTasksResponse'
import Item from './components/Item'
import { listContent, ListTypes } from './constants'
import * as S from './styles'
import { DtoUpdateTasksRequest } from 'services/api/tasks/dtoUpdateTasksRequest'
import AddItem from './components/AddItem'
import Button from 'components/Button'

export interface ListProps {
  type: ListTypes
  tasks: DtoTask[]
  onEdit: (tasks: DtoTask[], id: number) => void
  onSave: () => void
  onSubmit: (id: string | number, field: DtoUpdateTasksRequest) => Promise<void>
  onDelete: (id: string | number) => Promise<void>
  onCreate: (title: string) => Promise<void>
  onDeleteAll: (status: 'TODO' | 'DONE') => Promise<void>
  selectedTask?: DtoTask
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
                    <Item
                      done={task.status === 'DONE'}
                      id={task.id}
                      title={task.title}
                      onEdit={() => props.onEdit(props.tasks, task.id)}
                      onSubmit={async (title: string) => {
                        props.onSave()
                        await props.onSubmit(task.id, { title })
                      }}
                      onUpdateStatus={async status => {
                        await props.onSubmit(task.id, { status })
                      }}
                      selectedTask={props.selectedTask}
                      onDelete={props.onDelete}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            {props.type === ListTypes.TODO && (
              <AddItem onSubmit={props.onCreate} />
            )}
            <Button
              onClick={() => {
                props.onDeleteAll(props.type)
              }}
            >
              erase all
            </Button>
          </S.List>
        )}
      </Droppable>
    </S.Wrapper>
  )
}

export default List
