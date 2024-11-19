import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'

import { HomeImage } from 'interfaces/GetHomeImgs.interface'

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
  }
})
