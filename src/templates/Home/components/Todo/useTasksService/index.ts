import React from 'react'
import toast from 'react-hot-toast'
import TasksService from 'services/api/tasks'
import { DtoTask } from 'services/api/tasks/dtoGetTasksResponse'
import { DtoUpdateTasksRequest } from 'services/api/tasks/dtoUpdateTasksRequest'
import Cookies from 'utils/cookies'

const useTasksService = () => {
  const [loading, setLoading] = React.useState<boolean>()
  const [tasks, setTasks] = React.useState<DtoTask[]>()

  const list = React.useCallback(async () => {
    try {
      setLoading(true)
      const authToken = Cookies.get('auth_token')
      const response = await TasksService.get(authToken || '')
      setTasks(response.tasks)
    } finally {
      setLoading(false)
    }
  }, [])

  const update = React.useCallback(
    async (id: string | number, field: DtoUpdateTasksRequest) => {
      try {
        const authToken = Cookies.get('auth_token')
        await TasksService.update(id, authToken || '', field)
        toast.success('Item atualizado com sucesso')
      } catch (error: any) {
        toast.error(error?.data?.response?.message)
      }
    },
    []
  )

  React.useEffect(() => {
    list()
  }, [list])

  return {
    tasks,
    loading,
    error: !tasks && !loading,
    update,
    list
  }
}

export default useTasksService
