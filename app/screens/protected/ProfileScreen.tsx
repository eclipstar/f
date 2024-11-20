/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, Text } from 'react-native'

import Logo from '../../../logo.svg'
import { ScrollView } from 'react-native-gesture-handler'

import { PeriodCalendar } from '@ui/components/Calendar'

import { LayoutUtils } from '@utils/layout'

export function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo width={125} height={125} />
      <Text style={styles.title}>CALENDARIO MENSTRUAL</Text>
      <PeriodCalendar />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: LayoutUtils.moderateScale(20),
    paddingTop: 70
  },
  title: {
    marginTop: LayoutUtils.moderateVerticalScale(45),
    marginBottom: LayoutUtils.moderateVerticalScale(15),
    color: '#533A8E',
    fontWeight: '700',
    fontSize: LayoutUtils.scaleFontSize(23)
  }
})
