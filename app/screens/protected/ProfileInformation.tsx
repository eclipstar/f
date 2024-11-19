import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackNavigationProp } from '@react-navigation/stack'
import { IGetGeneralUser } from 'interfaces/CreateUser.interface'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { getUserInfo } from '@services/GetUserInfo.service'

import { RootStackParamList } from '@screens/RegisterScreen'

import { ProfileInfo } from './ProfileInfo'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>

interface Props {
  navigation: ProfileScreenNavigationProp
}

const ProfileInformation = ({ navigation }: Props) => {
  const [userInformation, setUserInformation] = useState<IGetGeneralUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [showUserForm, setShowUserForm] = useState<boolean>(false)

  const handleEdit = () => console.log('Edit Profile')
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('jwt')
      navigation.navigate('SignUpOpts')
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al cerrar sesión. Intenta de nuevo.')
      console.error('Logout error:', error)
    }
  }

  const handlePersonalInfo = () => setShowUserForm(true)

  const handleCalendar = () => {
    navigation.navigate('Calendar')
  }

  const handleProtocols = () => console.log('Go to Protocols')

  const getUserData = async () => {
    try {
      const userData = await getUserInfo()
      setUserInformation(userData)
    } catch (error) {
      console.error('Error fetching user info:', error)
      Alert.alert('Error', 'No se pudieron cargar los datos del usuario.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size='large' color='#6A1B9A' />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name='arrow-back' size={24} color='white' />
        </TouchableOpacity>
        <Text style={styles.title}>Mi perfil</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: userInformation?.data?.avatar ?? 'https://via.placeholder.com/100'
            }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon} onPress={handleEdit}>
            <Icon name='camera-alt' size={18} color='white' />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{userInformation?.data?.name ?? 'No name available'}</Text>
        <Text style={styles.email}>{userInformation?.data?.email ?? 'No email available'}</Text>
      </View>
      <View style={styles.body}>
        {!showUserForm ? (
          <>
            <TouchableOpacity style={styles.button} onPress={handlePersonalInfo}>
              <Icon name='person' size={45} color='#6A1B9A' />
              <Text style={styles.buttonText}>Información personal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCalendar}>
              <Icon name='calendar-today' size={45} color='#6A1B9A' />
              <Text style={styles.buttonText}>Calendario Menstrual</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <View>
                <TouchableOpacity style={styles.footerButton} onPress={handleProtocols}>
                  <Icon name='security' size={20} color='#6A1B9A' />
                  <Text style={styles.footerText}>Protocolos de seguridad</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.footerButton} onPress={handleLogout}>
                  <Icon name='logout' size={20} color='#6A1B9A' />
                  <Text style={styles.footerText}>Cerrar Sesión</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <ProfileInfo userInformation={userInformation} onSubmit={() => setShowUserForm(false)} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A1B9A'
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  loadingText: {
    marginTop: 10,
    color: '#6A1B9A',
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#6A1B9A'
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFF'
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    backgroundColor: '#6A1B9A',
    padding: 5,
    borderRadius: 15
  },
  name: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 10,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 5
  },
  body: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 20
  },
  button: {
    backgroundColor: '#F3E5F5',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '35%'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6A1B9A',
    fontWeight: 'bold'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#F8F8F8',
    marginBottom: 30
  },
  footerButton: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#6A1B9A'
  }
})

export default ProfileInformation
