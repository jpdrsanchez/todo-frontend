import { api } from 'services'
import { DtoLoginRequest } from './dtoLoginRequest'
import { DtoLoginResponse } from './dtoLoginResponse'

export default class AuthService {
  static async login(payload: DtoLoginRequest) {
    const response = await api.post<DtoLoginResponse>('/auth/login', payload)

    return response.data
  }
}
