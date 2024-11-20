/* eslint-disable react-native/no-inline-styles */
import { useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'

import Logo from '../../../logo.svg'
import Loader from '../../ui/components/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Emotion } from 'interfaces/Emotion.interface'
import { HomeImage } from 'interfaces/GetHomeImgs.interface'

import Carousel from '@ui/components/Carousel'
import { SliderCard } from '@ui/components/SliderCard'

import { storeData } from '@services/AsyncStorage.service'
import { GetEmotions } from '@services/GetEmotions.service'
import { CarrouselImg, GetCarrouselImages } from '@services/home/GetCrrouselmages.service'
import { GetImagesHome } from '@services/home/GetHomeImages.service'
import { createDailyEmotion } from '@services/setDailyEmotion'

import img1 from '@assets/images/1.png'
import img2 from '@assets/images/2.png'

import ModalComponent from './Modal'

export function HomeScreen() {
  const renderItem = (item: HomeImage) => <SliderCard item={item} />
  const [loading, setLoading] = useState<boolean>(true)
  const [firtSlider, setFirstSlider] = useState<HomeImage[]>([])
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
    try {
      const imgs = await GetImagesHome()
      const carrousel = await GetCarrouselImages()
      setimgsHome(imgs.data)
      setCarrouselImgs(carrousel.data)
    } catch (error) {
      console.log('🚀 ~ getHomeImage ~ error:', error)
    } finally {
      setLoading(false)
    }
  }

  const buildFirst = async () => {
    setFirstSlider([
      {
        id: 1,
        image_file_title: 'Imagen 1',
        image_file_content: img1,
        image_file_description: 'Imagen 1',
        image_file_status: 1,
        image_file_shows_in: 0
      },
      {
        id: 2,
        image_file_title: 'Imagen 2',
        image_file_content: img2,
        image_file_description: 'Imagen 2',
        image_file_status: 1,
        image_file_shows_in: 0
      },
      {
        id: 3,
        image_file_title: 'Imagen 3',
        image_file_content: img1,
        image_file_description: 'Imagen 3',
        image_file_status: 1,
        image_file_shows_in: 0
      }
    ])
  }

  const fetchEmotions = async () => {
    const res = await GetEmotions()
    setEmotions(res.data)
  }

  useEffect(() => {
    getHomeImage()
    fetchEmotions()
    checkModalVisibility()
    buildFirst()
  }, [])

  if (loading) {
    return <Loader loading />
  }

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
      <View style={styles.item}>
        <Logo width={125} height={125} />
        <FlatList
          style={{ marginBottom: 30 }}
          data={firtSlider}
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
      </View>
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
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
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
