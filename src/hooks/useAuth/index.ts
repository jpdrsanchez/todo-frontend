import { useRouter } from 'next/router'
import React from 'react'
import toast from 'react-hot-toast'
import AuthService from 'services/api/auth'
import { DtoLoginRequest } from 'services/api/auth/dtoLoginRequest'
import Cookies from 'utils/cookies'

const useAuth = () => {
  const router = useRouter()

  const login = React.useCallback(
    async (payload: DtoLoginRequest) => {
      try {
        const response = await AuthService.login(payload)
        Cookies.set('auth_token', response.token)
        toast.success('Usuário logado com sucesso')
        router.reload()
      } catch (error: any) {
        toast.error(error?.data?.response?.message)
      }
    },
    [router]
  )

  const logout = React.useCallback(async () => {
    try {
      await AuthService.logout(Cookies.get('auth_token') || '')
      toast.success('Usuário deslogado com sucesso')
    } finally {
      Cookies.destroy('auth_token')
      router.reload()
    }
  }, [router])

  return {
    login,
    logout
  }
}

export default useAuth
