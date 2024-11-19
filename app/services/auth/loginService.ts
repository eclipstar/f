import api from '../../config/axiosConfig'

export const Login = async (user: { email: string; password: string }) => {
  try {
    const response = await api.post('/api/login', user)
    return response.data
  } catch (error) {
    throw error
  }
}

export const LogOut = async () => {
  try {
    const response = await api.post('/api/auth/logout')
    return response.data
  } catch (error) {
    throw error
  }
}
