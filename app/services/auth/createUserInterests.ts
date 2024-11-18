import api from '../../config/axiosConfig'
import { ICreateUserInterests } from 'interfaces/CreateUser.interface'

export const createUserInterest = async (userData: ICreateUserInterests) => {
  try {
    const response = await api.post('/api/v1/interests/user-interests', userData)
    return response.data
  } catch (error) {
    throw error
  }
}
