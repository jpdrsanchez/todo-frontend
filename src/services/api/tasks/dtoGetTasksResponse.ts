export interface DtoTask {
  id: number
  title: string
  order: number
  status: 'DONE' | 'TODO'
}

export interface DtoGetTasksResponse {
  tasks: DtoTask[]
}
