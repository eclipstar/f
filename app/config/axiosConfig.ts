import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://159.223.132.11', 
  timeout: 10000 
})

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('jwt')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      config.headers['Content-Type'] = `application/json`
    }
    return config
  },
  error => Promise.reject(error)
)

export default api
