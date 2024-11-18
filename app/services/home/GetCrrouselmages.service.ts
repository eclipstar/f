import api from '@config/axiosConfig'

export interface IGetCarrouselImgs {
  status: number
  data: CarrouselImg[]
}

export interface CarrouselImg {
  id: number
  image_file_title: string
  image_file_content: string
  image_file_description: string
  image_file_status: number
  image_file_shows_in: number
}

export const GetCarrouselImages = async (): Promise<IGetCarrouselImgs> => {
  try {
    const response = await api.get<IGetCarrouselImgs>('/api/v1/images/carousel-images')
    return response.data
  } catch (error) {
    console.error('Error al obtener imagenes home:', error)
    throw error
  }
}
