import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface CardProps {
  title?: string
  backgroundColor?: string
  style?: object
}

const Card: React.FC<CardProps> = ({ title, backgroundColor = '#F8F7FF', style }) => {
  return (
    <View style={[styles.card, { backgroundColor }, style]}>
      {title && <Text style={styles.cardText}>{title}</Text>}
    </View>
  )
}

const ModuleCards: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Main module card */}
      <View style={styles.headerContainer}>
        <Card title='MODULO 1' style={styles.mainCard} />
      </View>

      {/* Grid of cards */}
      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <Card title='SOCIO-EMOCIONES' style={styles.gridCard} />
          <Card style={styles.gridCard} />
          <Card style={styles.gridCard} />
        </View>

        <View style={styles.row}>
          <Card style={styles.gridCard} />
          <Card style={styles.gridCard} />
          <Card style={styles.gridCard} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  headerContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainCard: {
    width: '90%',
    height: '100%'
  },
  gridContainer: {
    flex: 0.6,
    marginTop: 16
  },
  row: {
    flex: 0.4, // Ahora cada fila ocupa 40% del espacio disponible en gridContainer
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  gridCard: {
    flex: 0.3,
    height: '100%' // Ocupa todo el alto disponible de la fila
  },
  card: {
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  cardText: {
    color: '#6B45BC',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default ModuleCards
