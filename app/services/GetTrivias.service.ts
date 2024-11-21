import api from '../config/axiosConfig'
import { IGetTriviaData } from 'interfaces/GetTrivia.interface'

export const getTrivia = async (idTrivia: string): Promise<IGetTriviaData> => {
  try {
    const response = await api.get<IGetTriviaData>('/api/v1/trivia', {
      params: { trivia_id: idTrivia }
    })
    return response.data
  } catch (error: any) {
    // Asegúrate de usar `any` para acceder a las propiedades del error
    // Capturar detalles del error
    console.log('🚀 ~ updateUserInformation ~ Error Message:', error.message) // Mensaje de error principal
    if (error.response) {
      // Si el error proviene de la respuesta del servidor
      console.log('🚀 ~ updateUserInformation ~ Response Status:', error.response.status)
      console.log('🚀 ~ updateUserInformation ~ Response Data:', error.response.data)
      console.log('🚀 ~ updateUserInformation ~ Response Headers:', error.response.headers)
    } else if (error.request) {
      // Si no se recibió respuesta del servidor
      console.log('🚀 ~ updateUserInformation ~ Request Error:', error.request)
    } else {
      // Si ocurrió otro tipo de error
      console.log('🚀 ~ updateUserInformation ~ General Error:', error.message)
    }

    throw error // Lanza el error después de registrarlo
  }
}
