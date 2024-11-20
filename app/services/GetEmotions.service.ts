import api from '../config/axiosConfig'
import { IGetEmotion } from 'interfaces/Emotion.interface'

import { emojiMap } from '@utils/emojis/emojiMap'

export const GetEmotions = async (): Promise<IGetEmotion> => {
  try {
    const response = await api.get<IGetEmotion>('/api/v1/emotions')

    const updatedData = response.data.data.map(emotion => ({
      ...emotion,
      icon: emojiMap[emotion.id]
    }))

    return { ...response.data, data: updatedData }
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
