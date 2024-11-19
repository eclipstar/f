import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Logo from '../../logo.svg'
import useAuthStore from '../store/useAuthStore'
import { StackNavigationProp } from '@react-navigation/stack'

import colors from '@config/theme/colors'

import { LayoutUtils } from '@utils/layout'

import { RootStackParamList } from './SignUpOptsScreen'

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Description2'>
interface Props {
  navigation: RegisterScreenNavigationProp
}
const Description2Screen = ({ navigation }: Props) => {
  setTimeout(() => {
    navigation.navigate('Description3')
  }, 3000)

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo width={150} height={150} />
      </View>
      <Text style={styles.loadingText}>
      La Colectiva Feminista junto con la Fundación Heinrich Böll, la Asociación de Investigación y Especialización sobre Temas Iberoamericanos (AIETI), Fundación de Ayuda contra la Drogadicción (FAD), pensamos en una propuesta para hablar acerca de nuestros derechos, emociones y en la necesidad de contar con herramientas para prevenir y erradicar las violencias desde la promoción de la Educación Integral en Sexualidad, la equidad e inclusión. 
      </Text>
      <Text style={styles.loadingText}>
      Creemos firmemente que las juventudes salvadoreñas debemos ejercer una ciudadanía activa, informada y libre de violencia. Para ello, hemos contado con el respaldo y apoyo financiero de la Unión Europea y AECID.
      </Text>
      <Text style={styles.loadingText}>
      Informa, comparte y aprende sobre los derechos de las juventudes y las diversidades. El conocimiento es una herramienta poderosa.
      </Text>
      <Text style={styles.footerTextTitle}>
      Recuerda, las redes salvan. 
      </Text>
      <Text style={styles.footerText}>
      ¡Actúa, sueña y transforma!
      </Text>
      <View style={styles.stepProgressContainer}>
        <View style={styles.step} />
        <View style={styles.activeStep} />
        <View style={styles.step} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
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
    fontSize: LayoutUtils.scaleFontSize(14),
    color: '#000000',
    fontWeight: '300',
    lineHeight: 22,
    textAlign: 'justify',
    width: '85%'
  },
  footerTextTitle: {
    marginTop:10,
    width: '85%',
    fontSize: LayoutUtils.moderateScale(18),
    textAlign: 'center',
    color: colors.secondaryTextColor,
    
  },
  footerText: {
    // marginTop:10,
    width: '85%',
    fontSize: LayoutUtils.moderateScale(20),
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.secondaryTextColor,
    marginBottom: LayoutUtils.moderateScale(20)
  }
})

export default Description2Screen
