import { StyleSheet, Text, View } from 'react-native'

import { LayoutUtils } from '@utils/layout'

export function JuegosScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }}>Juegos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: LayoutUtils.moderateScale(20)
  }
})
