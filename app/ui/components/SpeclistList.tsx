/* eslint-disable react-native/no-inline-styles */
import { ScrollView, StyleSheet, View } from 'react-native'

import { Directory } from '@services/directories/GetDirectoriesByZone.service'

import SpecialistCard from './SpecialistCard'

function SpecialistList({ data }: { data: Directory[] }) {
  return (
    <View style={{ ...styles.container }}>
      {data.map(card => (
        <SpecialistCard item={card} key={card.id} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: 0,
    marginHorizontal: 'auto',
    gap: 20,
    marginTop: 40,
    paddingBottom: 200
  }
})

export default SpecialistList
