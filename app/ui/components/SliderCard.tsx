import { useState } from 'react'
import { Image, ImageBackground, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'

import PlayImg from '../../assets/icons/play.svg'
import { HomeImage } from 'interfaces/GetHomeImgs.interface'

import { Video } from '@services/Videos.service'

import CustomModal from './CustomModal'
import VideoPlayer from './VideoPlayer'

export function SliderCard({ item }: { item: HomeImage }) {
  const resolveSource = (): ImageSourcePropType => {
    if (typeof item.image_file_content === 'string') {
      return { uri: item.image_file_content }
    } else {
      return item.image_file_content
    }
  }

  return (
    <View style={styles.box}>
      <Image width={144} height={148} source={resolveSource()} style={styles.image} />
    </View>
  )
}

export function SliderVideoCard({ item }: { item: Video }) {
  const [showVideo, setshowVideo] = useState(false)

  return (
    <>
      <View style={styles.listItem}>
        <View style={styles.videoContainer}>
          <Pressable
            onPress={() => {
              setshowVideo(true)
            }}
          >
            <View style={{ position: 'relative' }}>
              <ImageBackground
                style={styles.imageContainer}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5G0GEO6mDxg8Vk3Eg-izH67_GVj1oFMKjtA&s'
                }}
                resizeMode='cover'
              />
              <PlayImg style={styles.imagePlay} />
            </View>
          </Pressable>
        </View>
      </View>
      <CustomModal onClose={() => setshowVideo(false)} visible={showVideo}>
        <VideoPlayer video={item} />
      </CustomModal>
    </>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 144,
    height: 148,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 4
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  container: {
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '100%',
    marginBottom: 100
  },
  listItem: {
    marginBottom: 20,
    alignItems: 'center'
  },
  imageContainer: {
    width: 140,
    height: 140,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 20,
    opacity: 0.8,
    objectFit: 'cover'
  },
  videoContainer: {
    flex: 1,
    alignItems: 'center'
  },
  imageContainerEven: {
    overflow: 'hidden',
    width: 100,
    opacity: 0.8,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    objectFit: 'cover'
  },
  imagePlay: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -40 }, { translateY: -30 }]
  },
  imagePlayEven: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -15 }]
  },
  videoDescription: {
    color: 'black',
    flex: 1
  }
})
