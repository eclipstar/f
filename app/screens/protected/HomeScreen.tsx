/* eslint-disable react-native/no-inline-styles */
import { useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet } from 'react-native'

import Logo from '../../../logo.svg'
import { HomeImage } from 'interfaces/GetHomeImgs.interface'

import Carousel from '@ui/components/Carousel'
import { SliderCard } from '@ui/components/SliderCard'

import { CarrouselImg, GetCarrouselImages } from '@services/home/GetCrrouselmages.service'
import { GetImagesHome } from '@services/home/GetHomeImages.service'
import ModalComponent from './Modal'
import { GetEmotions } from '@services/GetEmotions.service'
import { Emotion } from 'interfaces/Emotion.interface'
import { createDailyEmotion } from '@services/setDailyEmotion'
import { storeData } from '@services/AsyncStorage.service'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function HomeScreen() {
  const renderItem = (item: HomeImage) => <SliderCard item={item} />
  const [imgsHome, setimgsHome] = useState<HomeImage[]>([])
  const [emotions, setEmotions] = useState<Emotion[]>([])
  const [carrouselImgs, setCarrouselImgs] = useState<CarrouselImg[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false) 
  
  const handleEmotionSelect = async (emotion: string) => {
    try {
      const response = await createDailyEmotion({ emotion })
      return {
        tip_title: response.data.tip_title,
        tip_description: response.data.tip_description
      }
    } catch (error) {
      console.error('Error sending emotion:', error)
      return null
    }
  }

  const checkModalVisibility = async () => {
    try {
      const lastShownDate = await AsyncStorage.getItem('lastModalDate')
      const today = new Date().toISOString().split('T')[0] 
      if (lastShownDate !== today) {
        setIsModalVisible(true) 
        await storeData('lastModalDate', today)
      }
    } catch (error) {
      console.error('Error checking modal visibility:', error)
    }
  }
  
  const getHomeImage = async () => {
    const imgs = await GetImagesHome()
    const carrousel = await GetCarrouselImages()
    setimgsHome(imgs.data)
    setCarrouselImgs(carrousel.data)
  }

  const fetchEmotions = async () => {
    const res = await GetEmotions()
    setEmotions(res.data)
  }

  useEffect(() => {
    getHomeImage()
    fetchEmotions()
    checkModalVisibility()
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Modal */}
      {isModalVisible && (
      <ModalComponent
        emotions={emotions}
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onEmotionSelect={handleEmotionSelect} 
      />
      )}

      {/* Logo */}
      <Logo width={125} height={125} />

      {/* Lista scrolleable horizontal */}
      <FlatList
        style={{ marginBottom: 30 }}
        data={imgsHome}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      <Carousel data={carrouselImgs} />
      <FlatList
        style={{ marginTop: 30, marginBottom: 150 }}
        data={imgsHome}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  },
  logo: {
    resizeMode: 'contain',
    marginTop: 20
  },

  listContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: 155,
    gap: 30
  },

  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  centralImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  stopText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#AA5EC9'
  },
  violenceText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#AA5EC9'
  }
})
