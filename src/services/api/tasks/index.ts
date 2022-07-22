import { api } from 'services'
import { DtoGetTasksResponse } from './dtoGetTasksResponse'
import { DtoUpdateTasksRequest } from './dtoUpdateTasksRequest'

export default class TasksService {
  static async get(token: string) {
    const response = await api.get<DtoGetTasksResponse>('/tasks', {
      headers: { Authorization: `Bearer ${token}` }
    })

    return response.data
  }

  static async update(
    id: number | string,
    token: string,
    payload: DtoUpdateTasksRequest
  ) {
    await api.put(`/tasks/${id}`, payload, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }
}
