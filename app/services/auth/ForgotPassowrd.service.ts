import api from '../../config/axiosConfig'

export const ForgotPassword = async (email: string): Promise<any> => {
  const response = await api.post<any>('/api/forgot-password', { email })
  return response.data
}
