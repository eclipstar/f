import api from '../../config/axiosConfig'
import { ICreateUserInfo } from 'interfaces/CreateUser.interface'

export const createUserInfo = async (userData: ICreateUserInfo) => {
  try {
    const response = await api.post('/api/auth/register/info', userData)
    return response.data
  } catch (error) {
    throw error
  }
}
