/* eslint-disable react-native/no-inline-styles */
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Logo from '../../../logo.svg'
import Loader from '../../ui/components/Loader'
import { ScrollView } from 'react-native-gesture-handler'

import DataFilterActions from '@ui/components/DataFilterActions'
import VideoList from '@ui/components/VideoList'

import { GetVideos, Video } from '@services/Videos.service'

function VideosScreen() {
  const [loading, setLoading] = useState<boolean>(true)
  const [videos, setVideos] = useState<Video[]>([])

  const fetchVideos = async () => {
    try {
      const res = await GetVideos()
      setVideos(res.data)
    } catch (error) {
      console.error('Error fetching videos:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  if (loading) {
    return <Loader loading />
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.item}>
          <Logo width={125} height={125} />
        </View>
        {/* <DataFilterActions /> */}
        <View style={styles.capsulasEducativasContainer}>
          <Text style={styles.capsulasText}>CAPSULAS </Text>
          <Text style={styles.educativasText}>EDUCATIVAS</Text>
        </View>
        <Text style={styles.capsulasDescription}>Un espacio en el que encontrarás información importante...</Text>
      </View>
      {/* LISTA */}

      <VideoList videos={videos} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 0
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
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
    width: '80%'
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
