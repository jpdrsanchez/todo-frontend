import React from 'react'
import { DropResult } from 'react-beautiful-dnd'

import { DtoTask } from 'services/api/tasks/dtoGetTasksResponse'
import { DtoUpdateTasksRequest } from 'services/api/tasks/dtoUpdateTasksRequest'

const useTaskList = () => {
  const reOrderList = React.useCallback(
    async (
      result: DropResult,
      callback: (
        id: string | number,
        fields: DtoUpdateTasksRequest
      ) => Promise<void>
    ) => {
      if (!result.destination) return
      if (result.destination.index === result.source.index) return

      if (result.destination.droppableId === result.source.droppableId) {
        await callback(result.draggableId, {
          order: result.destination.index
        })
      } else {
        await callback(result.draggableId, {
          status: result.destination.droppableId as 'TODO' | 'DONE'
        })
      }
    },
    []
  )

  return {
    reOrderList
  }
}

export default useTaskList
