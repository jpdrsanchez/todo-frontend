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

  static async delete(id: number | string, token: string) {
    await api.delete(`/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  static async create(title: string, token: string) {
    await api.post(
      '/tasks',
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  static async deleteAll(status: 'TODO' | 'DONE', token: string) {
    await api.delete('/tasks', {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        status
      }
    })
  }
}
