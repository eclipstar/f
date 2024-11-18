import AsyncStorage from '@react-native-async-storage/async-storage'

// Function to save data
export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.error('Error saving data', error)
  }
}

// Function to retrieve data
export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return JSON.parse(value) // Parse if JSON data was stored
    }
    return null
  } catch (error) {
    console.error('Error retrieving data', error)
    return null
  }
}

// Function to delete data
export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
    console.log('Data removed successfully')
  } catch (error) {
    console.error('Error removing data', error)
  }
}
