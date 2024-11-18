import api from '../config/axiosConfig'
import { IGetGender } from 'interfaces/GetGenders.interface'

export const GetGenders = async (): Promise<IGetGender> => {
  try {
    const response = await api.get<IGetGender>('/api/v1/genders')
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
