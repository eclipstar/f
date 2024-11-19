import api from '../../config/axiosConfig'
import { ICreateUserInterests } from 'interfaces/CreateUser.interface'

export const createUserInterest = async (userData: ICreateUserInterests) => {
  try {
    const response = await api.post('/api/auth/register/interests', userData)
    return response.data
  } catch (error: any) { 
    throw error 
  }
}
