/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react'
import { Alert, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'

import PlayImg from '../../assets/icons/play.svg'

import { GetVideos, Video } from '@services/Videos.service'

import CustomModal from './CustomModal'
import VideoPlayer from './VideoPlayer'

const data = [
  {
    id: '1',
    text: 'Item 1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5G0GEO6mDxg8Vk3Eg-izH67_GVj1oFMKjtA&s'
  },
  {
    id: '2',
    text: 'Item 2',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Sa5vv2gPzCTTIfF_m6ULKdFWdwuGsLhDlw&s'
  },
  {
    id: '3',
    text: 'Item 3',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wSPENyKXkmZEMk7adZIyOLbyh2zoRPBi1g&s'
  },
  {
    id: '4',
    text: 'Item 4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYU7cEPQfWMyOJUQWNS1cS6gFau0IaaX6Mw&s'
  },
  {
    id: '5',
    text: 'Item 5',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuq40Q5w3ESpKT_26FJ-8VQSSjJEELyzMGrg&s'
  }
]

function ListItem({ item, index }: { item: Video; index: number }) {
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
                style={index % 2 === 0 ? styles.imageContainer : styles.imageContainerEven}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5G0GEO6mDxg8Vk3Eg-izH67_GVj1oFMKjtA&s'
                }}
                resizeMode='cover'
              />
              <PlayImg style={index % 2 === 0 ? styles.imagePlay : styles.imagePlayEven} />
            </View>
          </Pressable>
        </View>
        <Text style={{ fontWeight: '700' }}>{item.video_title}: </Text>
        <Text style={styles.videoDescription}>{item.video_description}</Text>
      </View>
      <CustomModal onClose={() => setshowVideo(false)} visible={showVideo}>
        <VideoPlayer video={item} />
      </CustomModal>
    </>
  )
}

function VideoList() {
  const [videos, setvideos] = useState<Video[]>([])

  const getVideos = async () => {
    const res = await GetVideos()
    setvideos(res.data)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <View style={styles.container}>
      {videos.map((video, i) => (
        <ListItem key={video.id} index={i} item={video} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '100%',
    marginBottom: 100
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    width: '100%',
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

export default VideoList
