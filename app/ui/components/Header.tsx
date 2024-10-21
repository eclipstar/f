import React from 'react'
import { View, StyleSheet } from 'react-native'
import HamburgerMenu from './HamMenu'

export function Header() {
  return (
    <View style={styles.headerContainer}>
        <View style={styles.ham}>
            <HamburgerMenu onPress={() => {}}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        backgroundColor:"#fff"
    },
    ham: {
        alignSelf: 'flex-end'
    }
})
