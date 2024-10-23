/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native'

import Logo from '../../../logo.svg'
import { ScrollView } from 'react-native-gesture-handler'

import DataFilterActions from '@ui/components/DataFilterActions'
import VideoList from '@ui/components/VideoList'

function VideosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo width={125} height={125} />
      <DataFilterActions />
      <View style={styles.titleContainer}>
        <View style={styles.capsulasEducativasContainer}>
          <Text style={styles.capsulasText}>CAPSULAS </Text>
          <Text style={styles.educativasText}>EDUCATIVAS</Text>
        </View>
        <Text style={styles.capsulasDescription}>Un espacio en el que encontrarás información importante...</Text>
      </View>
      {/* LISTA */}

      <VideoList />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 0
  },
  capsulasEducativasContainer: {
    marginTop: 30,
    flexDirection: 'row'
  },
  capsulasText: {
    textAlign: 'center',
    color: '#533A8E',
    fontWeight: '300',
    fontSize: 24
  },
  capsulasDescription: {
    textAlign: 'center',
    color: '#FF6F15',
    width: '60%'
  },
  educativasText: {
    textAlign: 'center',
    color: '#533A8E',
    fontWeight: '800',
    fontSize: 24
  },
  titleContainer: {
    alignItems: 'center',
    width: '90%'
  }
})

export default VideosScreen
