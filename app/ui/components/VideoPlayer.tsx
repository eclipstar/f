/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native'

import Video from 'react-native-video'
import YoutubePlayer from 'react-native-youtube-iframe'

import { Video as IVideo } from '@services/Videos.service'

function VideoPlayer({ video }: { video: IVideo }) {
  return (
    <View style={{ flex: 1, height: '100%', width: '100%' }}>
      {/* <YoutubePlayer height={400} play={true} videoId={'ezeZS3WUpgo'} /> */}
      <Video
        style={{ height: 200, width: '100%' }}
        source={{
          uri: video.link
        }} // URI del video
        controls={true} // Habilita controles del reproductor
        resizeMode='contain' // Ajusta el video a la pantalla
      />
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
