/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native'

import YoutubePlayer from 'react-native-youtube-iframe'

function VideoPlayer() {
  return (
    <View style={{ flex: 1, height: '100%', width: '100%' }}>
      <YoutubePlayer height={400} play={true} videoId={'ezeZS3WUpgo'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
export default VideoPlayer
