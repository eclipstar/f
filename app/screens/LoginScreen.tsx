import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

import Logo from '../../logo.svg'
import Google from '../assets/icons/google.svg'

import LoginForm from '@ui/Forms/LoginForm'
import Button from '@ui/components/Button'
import Title from '@ui/tipografy/Title'

import colors from '@config/theme/colors'

import { LayoutUtils } from '@utils/layout'

function LoginScreen() {
  const handleLoginWithGoogle = () => {
    Alert.alert('Registro con Google', 'Has presionado REcGISTRAR CON GOOGLE')
  }

  const handleLoginWithEmailAndPassword = (data: { email: string; password: string }) => {
    console.log('DESDE FUERA', data)
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
        <LoginForm onSubmit={handleLoginWithEmailAndPassword} />
        <View style={styles.forgotPasswordBox}>
          <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
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
