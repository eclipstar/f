import api from '@config/axiosConfig'

export interface IGetZones {
  status: number
  data: Zone[]
}

export interface Zone {
  id: number
  zone_name: string
}

export const GetZones = async (): Promise<IGetZones> => {
  try {
    const response = await api.get<IGetZones>('/api/v1/zones')
    return response.data
  } catch (error) {
    console.error('Error al obtener las zonas:', error)
    throw error
  }
}
