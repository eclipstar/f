import api from '../../config/axiosConfig'
import { ICreateUser } from 'interfaces/CreateUser.interface'

export const createUser = async (userData: ICreateUser) => {
  try {
    const response = await api.post('/api/register', userData)
    // AsyncStorage.setItem('@storage_key', response.data.);
    return response.data
  } catch (error) {
    throw error
  }
}
