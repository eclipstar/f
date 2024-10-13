import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../../logo.svg';
import useAuthStore from '../store/useAuthStore';
import colors from '@config/theme/colors';

const WelcomeScreen = () => {
    
  const {User} = useAuthStore()


  return (
    <View style={styles.container}>
      {/* Logo de la app */}
      <View style={styles.logoContainer}>
        <Logo width={200} height={200}/>
      </View>
      {/* Texto de bienvenida */}
      <Text style={styles.welcomeText}>¡Bienvenido a .... {User?.name}!</Text>

      {/* Texto de carga */}
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
    padding: 20,
  },
  logoContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 30,
  },
  logoPlaceholder: {
    width: 200,  // Ancho del logo
    height: 200, // Alto del logo
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.secondaryTextColor,
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 16,
    color: colors.primaryTextColor,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
