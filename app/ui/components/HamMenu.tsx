/* eslint-disable arrow-body-style */
import React from 'react'
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native'

import colors from '@config/theme/colors'

import { LayoutUtils } from '@utils/layout'

interface HamburgerMenuProps {
  onPress: (event: GestureResponderEvent) => void
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.line} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: LayoutUtils.moderateScale(10)
  },
  line: {
    width: 30,
    height: LayoutUtils.moderateVerticalScale(5),
    backgroundColor: colors.secondaryTextColor,
    marginVertical: 2,
    borderRadius: 25
  }
})

export default HamburgerMenu
