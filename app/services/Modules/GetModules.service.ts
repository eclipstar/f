import { IGetModules } from 'interfaces/Modules.interface'

import api from '@config/axiosConfig'

export const GetModules = async (): Promise<IGetModules> => {
  try {
    const response = await api.get<IGetModules>('/api/v1/modules')
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
