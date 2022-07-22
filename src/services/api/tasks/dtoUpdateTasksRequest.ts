export interface DtoUpdateTasksRequest {
  title?: string
  order?: number
  status?: 'TODO' | 'DONE'
}
