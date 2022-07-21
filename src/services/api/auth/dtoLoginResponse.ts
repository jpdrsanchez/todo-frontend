export interface DtoLoginResponse {
  user: {
    id: number
    username: string
    email: string
  }
  token: {
    token: string
  }
}
