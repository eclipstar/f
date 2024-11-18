/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native'

import DislikeOutlined from '../../assets/icons/dislikeOutlined.svg'
import FillHeart from '../../assets/icons/fillHeart.svg'
import FilledDislike from '../../assets/icons/filledDislike.svg'
import LikeFilled from '../../assets/icons/likeFilled.svg'
import LikeOutlined from '../../assets/icons/likeOutlined.svg'
import OutlineHeart from '../../assets/icons/outlineHeart.svg'
import YoutubePlayer from 'react-native-youtube-iframe'

function VideoPlayer() {
  return (
    <View style={{ flex: 1, height: '100%', width: '100%' }}>
      <YoutubePlayer height={400} play={true} videoId={'RNtgJMocKuo'} />
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
