import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MapsIcon from '../../assets/icons/maps.svg'
import WazeIcon from '../../assets/icons/waze.svg'

function SpecialistCard() {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>DR. CARRANZA</Text>
        <Text style={styles.phone}>6677-8899</Text>
        <Text style={styles.address}>Bo. La Merced, san miguel</Text>
      </View>
      <View style={styles.contactInformation}>
        <WazeIcon />
        <MapsIcon />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    backgroundColor: '#cea3d9',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },
  contactInformation: {
    flexDirection: 'row',
    gap: 5,
    position: 'absolute',
    bottom: 20,
    left: 20
  },
  textContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  phone: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '700',
    marginVertical: 5
  },
  address: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: '400'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 10
  }
})

export default SpecialistCard
