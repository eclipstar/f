import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

import Logo from '../../logo.svg'
import Google from '../assets/icons/google.svg'
import OKicon from '../assets/icons/ok.svg'
import { StackNavigationProp } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useToast } from 'react-native-toast-notifications'

import LoginForm from '@ui/Forms/LoginForm'
import Button from '@ui/components/Button'
import Title from '@ui/tipografy/Title'

import { storeData } from '@services/AsyncStorage.service'
import { ForgotPassword } from '@services/auth/ForgotPassowrd.service'
import { Login } from '@services/auth/loginService'

import colors from '@config/theme/colors'

import { LayoutUtils } from '@utils/layout'

import { RootStackParamList } from './RegisterScreen'

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>
interface Props {
  navigation: RegisterScreenNavigationProp
}

function LoginScreen({ navigation }: Props) {
  const toast = useToast()
  const [email, setemail] = useState('')
  const handleLoginWithGoogle = () => {
    Alert.alert('Registro con Google', 'Has presionado REGISTRAR CON GOOGLE')
  }

  const handleLoginWithEmailAndPassword = async (data: { email: string; password: string }) => {
    try {
      const response = await Login(data)
      await storeData('jwt', response?.access_token)
      await storeData('user', JSON.stringify(response))
      toast.show('Bienvenid@.', {
        type: 'success',
        placement: 'top',
        icon: <OKicon />,
        duration: 4000,
        animationType: 'slide-in'
      })
      navigation.navigate('Description1')
    } catch (error) {
      toast.show('Usuario o contrasena incorrectos.', {
        type: 'error',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in'
      })
    }
  }

  const handleResetPassword = async () => {
    if (!email) {
      return toast.show('Escriba un correo electronico', {
        type: 'info',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in'
      })
    }

    try {
      const res = await ForgotPassword(email)

      toast.show('Envío de correo exitoso', {
        type: 'success',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in'
      })
    } catch (error) {
      toast.show('No se pudo enviar el correo', {
        type: 'error',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in'
      })
    }
  }

  const getEmailForResetPass = (val: string) => {
    setemail(val)
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeLabelContainer}>
        <View style={styles.logoContainer}>
          <Logo width={130} height={120} />
        </View>
        <Title>¡Bienvenido/a!</Title>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.button}>
          <Button
            icon={<Google width={24} height={24} />}
            color={colors.secondary}
            handleClick={handleLoginWithGoogle}
            appearance='outlined'
            rounded
          >
            REGISTRAR CON GOOGLE
          </Button>
        </View>

        <Text style={styles.enterPersonalInfoText}>Ó INGRESA CON TUS DATOS</Text>
        <LoginForm handleEmail={getEmailForResetPass} onSubmit={handleLoginWithEmailAndPassword} />
        <View style={styles.forgotPasswordBox}>
          <TouchableOpacity onPress={handleResetPassword}>
            <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  forgotPasswordText: {
    color: colors.primaryTextColor,
    fontSize: LayoutUtils.scaleFontSize(18),
    textAlign: 'center'
  },
  forgotPasswordBox: {
    flex: 1,
    paddingBottom: LayoutUtils.moderateScale(30),
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  enterPersonalInfoText: {
    marginTop: LayoutUtils.moderateScale(20),
    marginBottom: LayoutUtils.moderateScale(40),
    color: colors.primaryTextColor,
    fontWeight: '600'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: LayoutUtils.moderateScale(30)
  },
  welcomeLabelContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },

  contentContainer: {
    flex: 4,
    alignItems: 'center'
  },
  button: {
    width: '90%'
  }
})

export default LoginScreen
