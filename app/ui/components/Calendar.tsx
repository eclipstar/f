/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import { Calendar } from 'react-native-calendars'

import { LayoutUtils } from '@utils/layout'

const width = Dimensions.get('screen').width

interface DayInterface {
  dateString: string
  day: number
  month: number
  timestamp: number
  year: number
}
export function PeriodCalendar() {
  const [selected, setSelected] = useState<string>('')
  const [periodDays, setPeriodDays] = useState<
    Record<string, { selected: boolean; color: string; textColor: string }>[]
  >([])

  const themeStyle = {
    selectedDayBackgroundColor: '#fdcfd9',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#fdcfd9',
    dayTextColor: '#2d4150',
    arrowColor: '#c01e55',
    monthTextColor: '#c01e55',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300'
  }

  const changeDay = (day: DayInterface) => {
    setSelected(day.dateString)
    let days = calculatePeriodDays(day.dateString)
    setPeriodDays(
      [...days].reduce((acc: any, date, i) => {
        acc[date] = {
          selected: true,
          color: '#fdcfd9',
          textColor: 'black',
          startingDay: i === 0 ? true : false,
          endingDay: i === days.length - 1 ? true : false
        }
        return acc
      }, {}) as any
    )
  }

  const calculatePeriodDays = (startDay: string): string[] => {
    const [year, month, day] = startDay.split('-')
    const endDay = new Date(startDay)
    endDay.setDate(Number(day) + 5)
    const periodDaysArray = []
    for (let i = 0; i < 5; i++) {
      if (i === 0) {
        periodDaysArray.push(startDay)
      } else {
        const prevDay: Date = new Date(periodDaysArray[i - 1])
        prevDay.setDate(prevDay.getDate() + 2)
        periodDaysArray.push(formatDate(prevDay))
      }
    }
    return periodDaysArray
  }

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }

    const formattedDate = new Intl.DateTimeFormat('en-CA', options).format(date)
    return formattedDate
  }

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={changeDay}
        markedDates={periodDays}
        markingType={'period'}
        theme={themeStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: LayoutUtils.moderateScale(20)
  },
  calendar: {
    width: width * 0.85
  }
})
