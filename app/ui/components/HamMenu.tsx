/* eslint-disable arrow-body-style */
import colors from '@config/theme/colors';
import { LayoutUtils } from '@utils/layout';
import React from 'react';
import { View, TouchableOpacity, GestureResponderEvent, StyleSheet } from 'react-native';

// Definimos los tipos de las props para TypeScript
interface HamburgerMenuProps {
  onPress: (event: GestureResponderEvent) => void;
}

// Componente HamburgerMenu en TypeScript con props
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

// Estilos para el menú hamburguesa
const styles = StyleSheet.create({
  container: {
    padding: LayoutUtils.moderateScale(10),
  },
  line: {
    width: 30,
    height: LayoutUtils.moderateVerticalScale(5),
    backgroundColor: colors.secondaryTextColor,
    marginVertical: 2,
    borderRadius: 25
  },
});

export default HamburgerMenu;
