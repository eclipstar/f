import api from '../config/axiosConfig'
import { IGetInterests } from 'interfaces/GetInterests.interface'

export const GetInterests = async (): Promise<IGetInterests> => {
  try {
    const response = await api.get<IGetInterests>('/api/v1/interests')
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
