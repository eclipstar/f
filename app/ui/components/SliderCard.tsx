import { Image, StyleSheet, View } from 'react-native'

export function SliderCard() {
  return (
    <View style={styles.box}>
      <Image
        width={144}
        height={148}
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/b82e/4a0e/7de77883dc2d2c73461747fff65b49c7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AhloDv6WPHWcp4QWS8Fv46lembjbvdWAwDCe7ZAs0gzq8c3fGWSKOGEyMNKlyzVhorJrHVvo5Fmzc3QnYpj5IB-1eGOpFdbGVtYt0wIUg3oaTbJN6El22ICjXhuCc2uOYfI-JPLjl6A7e~-eY8sTdJ7aMfSYB9q1Rrb6aPiJdbrW3rFvesccm1vLAhlo-XIP3pkyhL1MeEhAG3GYQppJ~k6mMwO6xvxnpcBGXru3JXRkGdvI0c~dkcWF1Oeyxm~6tDnKMfLhvbwrezEmhoCOnC8HjKhPCcM1zhs5ApcKOIAaNSusuf-pbr8j7SBlw073XpBDdXXWAKKSrBTTzcB5CQ__'
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
