import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '@screens/SignUpOptsScreen'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>

type Juego = {
  id: string
  name: string
  modulo: string
  view: string
  descripcion: string
  imagen: string
  colorBg: string
  idTrivia: string
}

const HomeScreen = () => {
  const [juegos, setJuegos] = useState<Juego[]>([])
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const modulo = 9

  const obtenerDatos = async () => {
    const direccion = 'https://raw.githubusercontent.com/eclipstar/apirest/refs/heads/main/dataTodosJuegos.json'
    const data: Juego[] = await (await fetch(direccion)).json()
    setJuegos(data)
  }

  useEffect(() => {
    obtenerDatos()
  }, [])

  return (
    <View style={styles.contenedorGeneral}>
      <View style={styles.contenedor}>
        {juegos.length === 0 ? (
          <View style={styles.noJuegos}>
            <Text style={styles.noJuegosTexto}>
              ¡Ups!, Parece que no hay juegos disponibles en este momento, intenta más tarde
            </Text>
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.scrollVista} showsVerticalScrollIndicator={false}>
            {juegos.map(item => {
              if (parseInt(item.modulo) <= modulo) {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.tarjeta}
                    onPress={() => navigation.navigate('Trivia', { idTrivia: parseInt(item.idTrivia) })}
                  >
                    <Image source={{ uri: item.imagen }} resizeMode='cover' style={styles.tarjetaImagen} />
                    <Text style={styles.tarjetaTitulo}>{item.name}</Text>
                  </TouchableOpacity>
                )
              }
            })}
          </ScrollView>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorGeneral: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  contenedor: {
    flex: 1,
    borderRadius: 24,
    marginHorizontal: 20,
    backgroundColor: '#f3f3f3',
    padding: 16
  },
  noJuegos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noJuegosTexto: {
    textAlign: 'center',
    margin: 16,
    color: '#000'
  },
  tarjeta: {
    alignItems: 'center',
    margin: 12
  },
  tarjetaImagen: {
    width: 110,
    height: 110,
    borderRadius: 16
  },
  tarjetaTitulo: {
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#9D47B2'
  },
  scrollVista: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingVertical: 20
  }
})

export default HomeScreen
