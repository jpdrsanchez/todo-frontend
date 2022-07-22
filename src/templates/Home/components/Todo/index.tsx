import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import Container from 'components/Container'
import Login from 'components/Login'
import List from './components/List'
import { ListTypes } from './components/List/constants'

import useVisibility from 'hooks/useVisibility'
import useTasksService from './useTasksService'

import * as S from './styles'
import useTaskList from './useTaskList'

const Todo = () => {
  const visibility = useVisibility()
  const tasksService = useTasksService()
  const tasks = useTaskList()

  return (
    <>
      <Login visible={visibility.visible} onClose={visibility.hide} />
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
          {tasksService.error && (
            <S.LoginText>
              <button onClick={visibility.show}>Sign in</button> to create and
              update your tasks
            </S.LoginText>
          )}
          {tasksService.loading && (
            <S.ListWrapper>
              <S.LoadingListWrapper>
                <S.LoadingList />
              </S.LoadingListWrapper>
              <S.LoadingListWrapper>
                <S.LoadingList />
              </S.LoadingListWrapper>
            </S.ListWrapper>
          )}
          {!tasksService.loading && tasksService.tasks && (
            <DragDropContext
              onDragEnd={async result => {
                await tasks.reOrderList(result, tasksService.update)
                await tasksService.list()
              }}
            >
              <S.ListWrapper>
                <List
                  selectedTask={tasks.currentTask}
                  onEdit={tasks.updateTaskTitle}
                  onSave={tasks.clearCurrentTask}
                  onSubmit={tasksService.update}
                  type={ListTypes.TODO}
                  onDelete={tasksService.remove}
                  onCreate={tasksService.create}
                  onDeleteAll={tasksService.removeAll}
                  tasks={tasksService.tasks
                    .filter(task => task.status === 'TODO')
                    .sort((a, b) => {
                      if (a.order < b.order) return -1
                      if (a.order > b.order) return 1
                      return 0
                    })}
                />
                <List
                  onEdit={tasks.updateTaskTitle}
                  onSave={tasks.clearCurrentTask}
                  onSubmit={tasksService.update}
                  type={ListTypes.DONE}
                  onDelete={tasksService.remove}
                  onCreate={tasksService.create}
                  onDeleteAll={tasksService.removeAll}
                  tasks={tasksService.tasks
                    .filter(task => task.status === 'DONE')
                    .sort((a, b) => {
                      if (a.order < b.order) return -1
                      if (a.order > b.order) return 1
                      return 0
                    })}
                />
              </S.ListWrapper>
            </DragDropContext>
          )}
        </Container>
      </S.Todo>
    </>
  )
}

export default Todo
