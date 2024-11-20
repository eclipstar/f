import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

interface LoaderProps {
  loading: boolean
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  if (!loading) return null

  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size='large' color='#6A1B9A' />
      <Text style={styles.loadingText}>Cargando...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    zIndex: 1000
  },
  loadingText: {
    marginTop: 10,
    color: '#6A1B9A',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Loader
