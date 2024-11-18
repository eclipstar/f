import api from '../config/axiosConfig'
import { IGetDeparments } from 'interfaces/GetDeparments.interface'

export const GetDeparments = async (): Promise<IGetDeparments> => {
  try {
    const response = await api.get<IGetDeparments>('/api/v1/departments')
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
