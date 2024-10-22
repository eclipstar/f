/* eslint-disable react-native/no-inline-styles */
import { ScrollView, StyleSheet } from 'react-native'

import SpecialistCard from './SpecialistCard'

function SpecialistList() {
  return (
    <ScrollView style={{ width: '100%', marginTop: 40 }} contentContainerStyle={styles.container}>
      {[1, 2, 3, 4, 5].map(card => (
        <SpecialistCard key={card} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: 0,
    marginHorizontal: 'auto',
    gap: 20
  }
})

export default SpecialistList
