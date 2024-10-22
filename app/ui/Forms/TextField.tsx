import colors from '@config/theme/colors';
import { LayoutUtils } from '@utils/layout';
import React from 'react';
import { View, TextInput, StyleSheet, Text, KeyboardTypeOptions } from 'react-native';

export interface TextInputProps {
    onChangeText: any;
    onBlur?: any;
    value: string;
    placeholder?: string;
    secureTextEntry?: boolean,
    label?: string
    keyBoardType?: KeyboardTypeOptions
}

function TextField ({placeholder,onChangeText,onBlur,secureTextEntry,value, label, keyBoardType = 'default'}: TextInputProps ) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        <TextInput
          keyboardType={keyBoardType}
          placeholder={placeholder}
          placeholderTextColor={colors.placeHolderColor}
          onBlur={onBlur} // Color del texto del placeholder
          style={styles.input}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color:colors.primaryTextColor,
    fontSize:LayoutUtils.scaleFontSize(14),
    fontWeight:'700',
    marginBottom:LayoutUtils.moderateScale(10)
  },
  container: {
    backgroundColor: '#E0E0E0', // Color de fondo del contenedor
    borderRadius: 10, // Bordes redondeados
    paddingHorizontal: LayoutUtils.moderateScale(10),
    paddingVertical: LayoutUtils.moderateScale(5),
  },
  input: {
    fontSize: LayoutUtils.scaleFontSize(14),
    fontWeight: '300',
    letterSpacing: 1,
    color: colors.placeHolderColor, // Color del texto del input
  },
});

export default TextField;
