import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Logo from '../../logo.svg'
import useAuthStore from '../store/useAuthStore'
import { StackNavigationProp } from '@react-navigation/stack'

import colors from '@config/theme/colors'

import { LayoutUtils } from '@utils/layout'

import { RootStackParamList } from './SignUpOptsScreen'

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Description1'>
interface Props {
  navigation: RegisterScreenNavigationProp
}
const Description1Screen = ({ navigation }: Props) => {
  setTimeout(() => {
    navigation.navigate('Description2')
  }, 5000)

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo width={200} height={200} />
      </View>
      <Text style={styles.welcomeText}>¡Bienvenido/a!</Text>

      <Text style={styles.loadingText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </Text>
      <View style={styles.stepProgressContainer}>
        <View style={styles.activeStep} />
        <View style={styles.step} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: LayoutUtils.moderateScale(20)
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  stepProgressContainer: {
    flexDirection: 'row',
    gap: 29,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },
  activeStep: {
    width: 33,
    height: 33,
    borderRadius: 50,
    backgroundColor: colors.stepColor
  },
  step: {
    width: 16,
    height: 16,
    borderRadius: 50,
    backgroundColor: colors.stepColor
  },
  logoPlaceholder: {
    width: 200,
    height: LayoutUtils.moderateVerticalScale(200),
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  logoText: {
    color: '#000',
    fontSize: 18
  },
  welcomeText: {
    fontSize: LayoutUtils.moderateScale(24),
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.secondaryTextColor,
    marginBottom: LayoutUtils.moderateScale(10)
  },
  loadingText: {
    fontSize: LayoutUtils.scaleFontSize(16),
    color: '#000000',
    fontWeight: '300',
    lineHeight: 22,
    textAlign: 'justify',
    width: '65%'
  }
})

export default Description1Screen
