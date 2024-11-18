import { Image, StyleSheet, View } from 'react-native'

import { HomeImage } from 'interfaces/GetHomeImgs.interface'

export function SliderCard({ item }: { item: HomeImage }) {
  return (
    <View style={styles.box}>
      <Image
        width={144}
        height={148}
        source={{
          uri: item.image_file_content
        }}
      />
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
  }
})
