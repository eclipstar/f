import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../../logo.svg';
import useAuthStore from '../store/useAuthStore';
import colors from '@config/theme/colors';
import { LayoutUtils } from '@utils/layout';
import { RootStackParamList } from './SignUpOptsScreen';
import { StackNavigationProp } from '@react-navigation/stack';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
  interface Props {
    navigation: RegisterScreenNavigationProp;
  }
const WelcomeScreen = ({navigation}: Props) => {
    
  const {User} = useAuthStore()
  
    setTimeout(() => {
        navigation.navigate('Main')
    }, 5000);


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo width={200} height={200}/>
      </View>
      <Text style={styles.welcomeText}>¡Bienvenido a .... {User?.name}!</Text>

      <Text style={styles.loadingText}>
        Estamos cargando tu información para encontrar el lugar ideal para ti...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: '#fff',
    padding: LayoutUtils.moderateScale(20),
  },
  logoContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 30,
  },
  logoPlaceholder: {
    width: 200,  // Ancho del logo
    height: LayoutUtils.moderateVerticalScale(200), // Alto del logo
    backgroundColor: '#e0e0e0',  // Color gris para simular el logo
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Bordes redondeados
  },
  logoText: {
    color: '#000',
    fontSize: 18,
  },
  welcomeText: {
    fontSize: LayoutUtils.moderateScale(24),
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.secondaryTextColor,
    marginBottom: LayoutUtils.moderateScale(10),
  },
  loadingText: {
    fontSize: LayoutUtils.scaleFontSize(16),
    color: colors.primaryTextColor,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
