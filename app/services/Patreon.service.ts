import api from '../config/axiosConfig'
import { IGetSponsor } from 'interfaces/Sponso.interface'

export const GetPatreons = async (): Promise<IGetSponsor> => {
  try {
    const response = await api.get<IGetSponsor>('/api/v1/sponsors')
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
