import api from '@config/axiosConfig'

import { Zone } from './GetZones.service'

export interface IGetDirectoriesByZone {
  status: number
  data: Directory[]
}

export interface Directory {
  id: number
  name: string
  phone: string
  address: string
  zone_id: number
  status: number
  services: Service[]
  social_networks: SocialNetwork[]
}

export interface Service {
  id: number
  service: string
  directory_id: number
}

export interface SocialNetwork {
  id: number
  company: string
  facebook: string
  youtube: string
  instagram: string
  tiktok: string
  x: string
  directory_id: number
}

export const GetDirectoriesByZone = async (zone: Zone): Promise<IGetDirectoriesByZone> => {
  try {
    const response = await api.get<IGetDirectoriesByZone>('/api/v1/directories/zone-directory', {
      params: { zone: zone.zone_name }
    })
    return response.data
  } catch (error) {
    console.error('Error al obtener los directorios por zona:', error)
    throw error
  }
}
