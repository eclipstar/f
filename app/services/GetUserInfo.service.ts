import api from '../config/axiosConfig'
import { IGetGeneralUser } from 'interfaces/CreateUser.interface'

export const getUserInfo = async (): Promise<IGetGeneralUser> => {
  try {
    const response = await api.get<IGetGeneralUser>('/api/auth/profile/information')
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
