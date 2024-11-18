import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

// Crear una instancia de Axios
const api = axios.create({
  baseURL: 'http://159.223.132.11', // Cambia esto a tu URL base
  timeout: 10000 // Tiempo límite opcional
})

// Interceptor de solicitud para agregar el token desde AsyncStorage
api.interceptors.request.use(
  async config => {
    // Obtener el token de AsyncStorage
    const token = await AsyncStorage.getItem('jwt')
    if (token) {
      // Si el token está disponible, agrégalo al encabezado de la solicitud
      config.headers.Authorization = `Bearer ${token}`
    }
    // Retornar la configuración, sin lanzar errores si el token no está
    return config
  },
  error => Promise.reject(error)
)

export default api
