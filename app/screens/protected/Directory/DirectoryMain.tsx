/* eslint-disable react-native/no-inline-styles */
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import Logo from '../../../../logo.svg'

import Button from '@ui/components/Button'

import { LayoutUtils } from '@utils/layout'

export function DirectoryMain({ handleClick }: { handleClick: Function }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo width={125} height={125} />
      <View style={styles.titleContainer}>
        <Text style={{ ...styles.label, ...styles.somosLabel }}>SOMOS</Text>
        <Text style={{ ...styles.label, ...styles.tuRedLabel }}>TU RED DE</Text>
        <Text style={{ ...styles.label, ...styles.apoyoLabel }}>APOYO</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </Text>
      </View>
      <View style={{ marginBottom: 100, width: '95%' }}>
        <Button handleClick={handleClick} elevated rounded appearance='filled'>
          DIRECTORIO POR ZONAS
        </Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: LayoutUtils.moderateScale(20),
    paddingTop: 0
  },

  somosLabel: {
    color: '#FF6F15'
  },
  tuRedLabel: {
    color: '#9D47B2'
  },
  apoyoLabel: {
    color: '#FF6F15'
  },
  label: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '900',
    lineHeight: 39
  },
  titleContainer: {
    marginTop: 100
  },
  contentContainer: {
    marginTop: 10,
    width: '80%'
  },
  content: {
    color: 'black',
    fontWeight: '300',
    fontSize: LayoutUtils.scaleFontSize(18),
    textAlign: 'justify',
    marginBottom: 35
  }
})
