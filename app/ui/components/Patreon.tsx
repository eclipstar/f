import { Image, StyleSheet } from 'react-native'

function Patreon({ url }: { url: string }) {
  return <Image source={{ uri: url }} style={styles.patreon} />
}

const styles = StyleSheet.create({
  patreon: {
    width: 141,
    height: 133,
    borderRadius: 50
  }
})
export default Patreon
