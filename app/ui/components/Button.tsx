import colors from '@config/theme/colors';
import { LayoutUtils } from '@utils/layout';
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    children: React.ReactNode,
    color?: string,
    rounded?: boolean,
    handleClick?: any,
    appearance: 'filled' | 'outlined'
    icon?: React.ReactNode,
    elevated: boolean,
    customRadius?: number
}

function Button ({children,color,rounded, customRadius, elevated, handleClick,appearance, icon}: Props) {
    const styles =  StyleSheet.create({
        registerButton: {
            width: '100%',
            padding: LayoutUtils.moderateScale(15),
            backgroundColor: color ?? colors.secondary,
            borderRadius: rounded ? 50 : customRadius ? customRadius : 10,
            justifyContent: 'center',
            alignItems: 'center',
          },
          buttonText: {
            color: '#fff',
            fontSize: LayoutUtils.scaleFontSize(16),
          },
          googleButton: {
            width: '100%',
            padding: LayoutUtils.moderateScale(15),
            flexDirection:"row",
            gap:15,
            borderColor: color ?? colors.primary,
            borderWidth: 1,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: LayoutUtils.moderateScale(20),
          },
          googleButtonText: {
            color: color ?? colors.primary,
            fontSize: LayoutUtils.scaleFontSize(16),
          },
          elevation: {
            elevation: 10
          }
    });

    return (
    <TouchableOpacity role='button' onPress={handleClick} style={{...appearance === 'filled' ? styles.registerButton : styles.googleButton, ...(elevated ? {elevation:8} : {}) }}>
        {icon ?? null}
        <Text style={ appearance === 'filled' ? styles.buttonText : styles.googleButtonText}>
            {children}
        </Text>
    </TouchableOpacity>
  )
}



export default Button