import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
  { id: '4', text: 'Item 4' },
  { id: '5', text: 'Item 5' }
]

function ListItem({ item, index }: { item: any; index: number }) {
  return (
    <View style={styles.listItem}>
      <View style={styles.videoContainer}>
        <View style={index % 2 === 0 ? styles.imageContainer : styles.imageContainerEven}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-play-icon-png-image_956416.jpg'
            }} // Placeholder image
            style={styles.image}
          />
        </View>
      </View>
      <Text style={styles.videoDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam quia, corrupti incidunt molestias et
        amet eveniet nisi quam maiores quidem blanditiis facere harum hnem .
      </Text>
    </View>
  )
}

function VideoList() {
  return (
    <View style={styles.container}>
      {data.map((video, i) => (
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
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  videoContainer: {
    flex: 1,
    alignItems: 'center'
  },
  imageContainerEven: {
    width: 100,
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  image: {
    width: 60,
    height: 60
  },
  videoDescription: {
    color: 'black',
    flex: 1
  }
})

export default VideoList
