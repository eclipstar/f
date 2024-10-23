import React from 'react'
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'

import colors from '@config/theme/colors'

import { LayoutUtils } from '@utils/layout'

export interface TextInputProps {
  onChangeText: any
  onBlur?: any
  value: string
  placeholder?: string
  secureTextEntry?: boolean
  label?: string
  keyBoardType?: KeyboardTypeOptions
}

function TextField({
  placeholder,
  onChangeText,
  onBlur,
  secureTextEntry,
  value,
  label,
  keyBoardType = 'default'
}: TextInputProps) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        <TextInput
          keyboardType={keyBoardType}
          placeholder={placeholder}
          placeholderTextColor={colors.placeHolderColor}
          onBlur={onBlur}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: colors.primaryTextColor,
    fontSize: LayoutUtils.scaleFontSize(14),
    fontWeight: '700',
    marginBottom: LayoutUtils.moderateScale(10)
  },
  container: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: LayoutUtils.moderateScale(10),
    paddingVertical: LayoutUtils.moderateScale(5)
  },
  input: {
    fontSize: LayoutUtils.scaleFontSize(14),
    fontWeight: '300',
    letterSpacing: 1,
    color: colors.placeHolderColor
  }
})

export default TextField
