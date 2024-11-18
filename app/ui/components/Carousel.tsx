import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'

import Arrow from '../../assets/icons/arrow.svg'
import { ScrollView } from 'react-native-gesture-handler'

import { CarrouselImg } from '@services/home/GetCrrouselmages.service'

const { width } = Dimensions.get('window')

const Carousel = ({ data }: { data: CarrouselImg[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const flatListRef: any = useRef(null)

  // Función para avanzar al siguiente elemento.
  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1)
      flatListRef?.current.scrollToIndex({ index: currentIndex + 1 })
    }
  }

  // Función para retroceder al elemento anterior.
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 })
    }
  }

  // Renderiza cada ítem del carrusel.
  const renderItem = ({ item }: any) => (
    <View style={[styles.item, { backgroundColor: item.color }]}>
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ width: '100%', height: '100%' }}
        source={{
          uri: item.image_file_content
        }}
      />
    </View>
  )

  return (
    <ScrollView horizontal style={styles.container}>
      {/* Flechas */}
      <TouchableOpacity onPress={handlePrev} style={{ ...styles.arrow, ...styles.arrowLeft }}>
        <Arrow style={{ transform: [{ rotate: '180deg' }] }} width={12} height={12} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNext} style={{ ...styles.arrow, ...styles.arrowRight }}>
        <Arrow width={12} height={12} />
      </TouchableOpacity>
      {/* Carrusel */}
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false} // Desactiva el scroll manual para que solo funcione con las flechas.
        style={styles.carousel}
        pagingEnabled
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500))
          wait.then(() => {
            flatListRef.current?.scrollToIndex({ index: info.index, animated: true })
          })
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  carousel: {
    width: width * 1,
    height: 200
  },
  item: {
    width: width * 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 24,
    color: '#fff'
  },
  arrowLeft: {
    left: 10,
    paddingRight: 2
  },
  arrowRight: {
    right: 10,
    paddingLeft: 2
  },
  arrow: {
    backgroundColor: '#9D47B2',
    borderRadius: 50,
    textAlign: 'center',
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: width * 0.2,
    position: 'absolute',
    zIndex: 1000
  },
  arrowText: {
    fontSize: 18,
    color: 'white'
  }
})

export default Carousel
