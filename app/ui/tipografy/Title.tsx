import colors from '@config/theme/colors';
import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'

function Title ({children, style}: {children: React.ReactNode, style?: StyleProp<TextStyle>}) {
  return (
    <Text style={[styles.welcomeText, style]}>
        {children}
    </Text>
  )
}

const styles = StyleSheet.create({
    welcomeText: {
        color: colors.secondaryTextColor,
        fontWeight:'700',
        fontSize:28
    },
});

export default Title