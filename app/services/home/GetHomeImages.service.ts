import { IGetHomeImg } from 'interfaces/GetHomeImgs.interface'

import api from '@config/axiosConfig'

export const GetImagesHome = async (): Promise<IGetHomeImg> => {
  try {
    const response = await api.get<IGetHomeImg>('/api/v1/images/home-images')
    return response.data
  } catch (error) {
    console.error('Error al obtener imagenes home:', error)
    throw error
  }
}
