import colors from '@config/theme/colors';
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
}

function Button ({children,color,rounded, handleClick,appearance, icon}: Props) {
    const styles =  StyleSheet.create({
        registerButton: {
            width: '100%',
            padding: 15,
            backgroundColor: color ?? colors.secondary,
            borderRadius: rounded ? 50 : 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          },
          buttonText: {
            color: '#fff',
            fontSize: 16,
          },
          googleButton: {
            width: '100%',
            padding: 15,
            flexDirection:"row",
            gap:15,
            borderColor: color ?? colors.primary,
            borderWidth: 1,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          },
          googleButtonText: {
            color: color ?? colors.primary,
            fontSize: 16,
          },
    });

    return (
    <TouchableOpacity role='button' onPress={handleClick} style={appearance === 'filled' ? styles.registerButton : styles.googleButton}>
        {icon ?? null}
        <Text style={ appearance === 'filled' ? styles.buttonText : styles.googleButtonText}>
            {children}
        </Text>
    </TouchableOpacity>
  )
}



export default Button