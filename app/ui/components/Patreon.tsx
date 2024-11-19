import { Image, StyleSheet } from 'react-native'

function Patreon({ url }: { url: string }) {
  return <Image source={{ uri: url }} style={styles.patreon} resizeMode="contain" />
}

const styles = StyleSheet.create({
  patreon: {
    width: 141,
    height: 133,
    
  }
})
export default Patreon
