import { useRouter } from 'next/router'
import React from 'react'
import toast from 'react-hot-toast'
import TasksService from 'services/api/tasks'
import { DtoTask } from 'services/api/tasks/dtoGetTasksResponse'
import { DtoUpdateTasksRequest } from 'services/api/tasks/dtoUpdateTasksRequest'
import Cookies from 'utils/cookies'

const useTasksService = () => {
  const [loading, setLoading] = React.useState<boolean>()
  const [tasks, setTasks] = React.useState<DtoTask[]>()
  const router = useRouter()

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
        setLoading(true)
        const authToken = Cookies.get('auth_token')
        await TasksService.update(id, authToken || '', field)
        toast.success('Item successfully updated')
      } catch (error: any) {
        router.reload()
        toast.error(error?.data?.response?.message)
      } finally {
        list()
        setLoading(false)
      }
    },
    [router, list]
  )

  const remove = React.useCallback(
    async (id: string | number) => {
      try {
        setLoading(true)
        const authToken = Cookies.get('auth_token')
        await TasksService.delete(id, authToken || '')
        toast.success('Item successfully deleted')
      } catch (error: any) {
        router.reload()
        toast.error(error?.data?.response?.message)
      } finally {
        list()
        setLoading(false)
      }
    },
    [router, list]
  )

  const create = React.useCallback(
    async (title: string) => {
      try {
        setLoading(true)
        const authToken = Cookies.get('auth_token')
        await TasksService.create(title, authToken || '')
        toast.success('Item created successfully')
      } catch (error: any) {
        router.reload()
        toast.error(error?.data?.response?.message)
      } finally {
        list()
        setLoading(false)
      }
    },
    [router, list]
  )

  const removeAll = React.useCallback(
    async (status: 'TODO' | 'DONE') => {
      try {
        setLoading(true)
        const authToken = Cookies.get('auth_token')
        await TasksService.deleteAll(status, authToken || '')
        toast.success('Items successfully deleted')
      } catch (error: any) {
        router.reload()
        toast.error(error?.data?.response?.message)
      } finally {
        list()
        setLoading(false)
      }
    },
    [router, list]
  )

  React.useEffect(() => {
    list()
  }, [list])

  return {
    tasks,
    loading,
    error: !tasks && !loading,
    update,
    list,
    remove,
    create,
    removeAll
  }
}

export default useTasksService
