import api from '../config/axiosConfig'

export interface IGetVideos {
  status: number
  data: Video[]
}

export interface Video {
  id: number
  video_title: string
  video_description: string
  link: string
  show_in: string
  status: number
}

export const GetVideos = async (): Promise<IGetVideos> => {
  try {
    const response = await api.get<IGetVideos>('/api/v1/videos')
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
