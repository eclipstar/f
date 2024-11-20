import api from '../../config/axiosConfig'
import { IResetPassword } from 'interfaces/CreateUser.interface'

export const ForgotPassword = async (email: string): Promise<any> => {
  try {
    const response = await api.post<any>('/api/forgot-password', { email })
    return response.data
  } catch (error: any) {
    throw error
  }
}

export const ForgotPasswordCode = async (email: string, code: string): Promise<any> => {
  const response = await api.post<any>('/api/forgot-password/validate-code', { email, code })
  return response.data
}

export const ForgotPasswordReset = async (userInfo: IResetPassword): Promise<any> => {
  try {
    console.log('🚀 ~ ForgotPasswordReset ~ userInfo:', userInfo)
    const response = await api.post<any>('/api/forgot-password/reset', userInfo)
    return response.data
  } catch (error: any) {
    // Asegúrate de usar `any` para acceder a las propiedades del error
    // Capturar detalles del error
    console.log('🚀 ~ ForgotPasswordReset ~ Error Message:', error.message) // Mensaje de error principal
    if (error.response) {
      // Si el error proviene de la respuesta del servidor
      console.log('🚀 ~ ForgotPasswordReset ~ Response Status:', error.response.status)
      console.log('🚀 ~ ForgotPasswordReset ~ Response Data:', error.response.data)
      console.log('🚀 ~ ForgotPasswordReset ~ Response Headers:', error.response.headers)
    } else if (error.request) {
      // Si no se recibió respuesta del servidor
      console.log('🚀 ~ ForgotPasswordReset ~ Request Error:', error.request)
    } else {
      // Si ocurrió otro tipo de error
      console.log('🚀 ~ ForgotPasswordReset ~ General Error:', error.message)
    }

    throw error // Lanza el error después de registrarlo
  }
}
