import api from '../config/axiosConfig'
import { ICreateDailyEmotion } from 'interfaces/Emotion.interface'

export const createDailyEmotion = async (emotion: ICreateDailyEmotion) => {
  try {
    const response = await api.post('/api/v1/emotions/daily-emotion',  emotion )
    return response.data
  } catch (error: any) {
    throw error 
  }
}
