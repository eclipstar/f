/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native'

import YoutubePlayer from 'react-native-youtube-iframe'

function VideoPlayer() {
  return (
    <View style={{ flex: 1, height: '100%', width: '100%' }}>
      <YoutubePlayer height={400} play={true} videoId={'RNtgJMocKuo'} />
    </View>
  )
}

export default VideoPlayer
