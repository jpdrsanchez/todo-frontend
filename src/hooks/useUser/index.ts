import { User } from 'interfaces/user'
import { api } from 'services'
import useSWR from 'swr'
import Cookies from 'utils/cookies'

const fetcher = async (url: string) => {
  const token = Cookies.get('auth_token')
  const response = await api.get<User>(url, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return response.data
}

const useUser = () => {
  const { data, error } = useSWR('/auth/me', fetcher)

  return {
    user: data,
    loading: !error && !data,
    error: !!error
  }
}

export default useUser
