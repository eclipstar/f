/* eslint-disable react/self-closing-comp */

/* eslint-disable react-native/no-inline-styles */

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { IGetPeriodDays, Period } from 'interfaces/Period.interface'
import { IGetSintoms, IGetTip, Sintom, Tip } from 'interfaces/Sintom.interface'
import { Calendar } from 'react-native-calendars'
import { FlatList } from 'react-native-gesture-handler'
import { useToast } from 'react-native-toast-notifications'

import api from '@config/axiosConfig'

import { sintomsEmojisMap } from '@utils/emojis/emojiMap'
import { LayoutUtils } from '@utils/layout'

import GenericModalComponent from './GenericModal'
import Loader from './Loader'

interface DayInterface {
  dateString: string
  day: number
  month: number
  timestamp: number
  year: number
}
const width = Dimensions.get('screen').width

export function PeriodCalendar() {
  const [selected, setSelected] = useState<string>('')
  const [periodDays, setPeriodDays] = useState<
    Record<string, { selected: boolean; color: string; textColor: string }>[]
  >([])
  const [sintoms, setsintoms] = useState<Sintom[]>([])
  const toast = useToast()
  const [showModal, setshowModal] = useState(true)
  const [selectedSintom, setselectedSintom] = useState<Sintom>()
  const [tip, settip] = useState<Tip>()
  const [isEditCalendar, setisEditCalendar] = useState(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [periodDaysResponse, setperiodDaysResponse] = useState<Period[]>([])

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

  useEffect(() => {
    getSintoms()
    getPeriodDays()
  }, [])

  const changeDay = (day: DayInterface, userClick: boolean = false) => {
    if (!isEditCalendar && userClick) return //Alert.alert('Alerta', 'Cambiar a modo edicion.')
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

  const getSintoms = async () => {
    try {
      setLoading(true)
      const res = await api.get<IGetSintoms>('/api/v1/symptoms')
      const updatedData = res.data.data.map(emotion => ({
        ...emotion,
        icon: sintomsEmojisMap[emotion.id]
      }))
      setsintoms(updatedData)
    } catch (error) {
      toast.show('No se pudo obtener los sintomas.', {
        type: 'error',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in'
      })
    } finally {
      setLoading(false)
    }
  }

  const getPeriodDays = async () => {
    try {
      const res = await api.get<IGetPeriodDays>('/api/v1/menstrual-calendar')
      setperiodDaysResponse(res.data.data)
      changeDay({
        dateString: formatDate(new Date(res.data.data[res.data.data.length - 1].start_date)),
        day: 1,
        month: 2,
        timestamp: 3,
        year: 2000
      })
    } catch (error) {
      toast.show('No se pudo obtener los dias del periodo.', {
        type: 'error',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in'
      })
    }
  }

  const getTip = async () => {
    try {
      const res = await api.post<IGetTip>('/api/v1/symptoms/daily-symptom', { symptom: selectedSintom?.symptom })
      settip(res.data.data)
    } catch (error) {
      toast.show('No se pudo obtener el consejo del dia.', {
        type: 'error',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in'
      })
    }
  }

  const calculatePeriodDays = (startDay: string): string[] => {
    const [year, month, day] = startDay.split('-')

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

  const pressSintom = (item: Sintom) => {
    if (item.id === 1) return setshowModal(false)
    setselectedSintom(item)
  }

  const handleApply = async () => {
    await getTip()
  }

  const saveCalendar = async () => {
    const endDay = new Date(selected)
    endDay.setDate(Number(endDay.getDate()) + 5)
    const dates = [selected, formatDate(endDay)]

    try {
      const body = {
        start_date: dates[0].replaceAll('-', '/'),
        end_date: dates[1].replaceAll('-', '/')
      }
      const res = await api.post('/api/v1/menstrual-calendar', body)
      console.log(res.data)

      toast.show('Periodo menstrual guardado con exito!.', {
        type: 'success',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in'
      })
      setisEditCalendar(false)
    } catch (error) {
      console.log(error)

      toast.show('No se pudo guardar el periodo menstrual.', {
        type: 'error',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in'
      })
    }
  }

  if (loading) {
    return <Loader loading />
  }
  const renderItem = ({ item }: { item: Sintom }) => (
    <TouchableOpacity onPress={() => pressSintom(item)} style={styles.itemContainer}>
      {item.id > 1 ? (
        <View
          style={{
            backgroundColor: selectedSintom?.id === item.id ? '#FF00A6' : '#BBA9FF26',
            padding: 10,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image source={item.icon} style={styles.icon} />
        </View>
      ) : (
        <Image source={item.icon} style={{ ...styles.icon, height: 60, width: 60 }} />
      )}
      <Text style={styles.label}>{item.symptom}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={(date: DayInterface) => {
          changeDay(date, true)
        }}
        markedDates={periodDays}
        markingType={'period'}
        theme={themeStyle}
      />
      {!isEditCalendar ? (
        <TouchableOpacity onPress={() => setisEditCalendar(true)} style={styles.editCalendarBtn}>
          <Text style={{ fontWeight: '600', color: 'white', textAlign: 'center' }}>Editar fechas de periodo</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={selected ? saveCalendar : () => Alert.alert('Atencion', 'Selecciona un periodo de fechas')}
          style={styles.editCalendarBtn}
        >
          <Text style={{ fontWeight: '600', color: 'white', textAlign: 'center' }}>Aplicar</Text>
        </TouchableOpacity>
      )}

      <GenericModalComponent
        isVisible={showModal}
        onClose={() => {
          setshowModal(false)
        }}
      >
        {!tip ? (
          <View style={{ width: '100%', position: 'relative' }}>
            <FlatList
              data={sintoms}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              numColumns={4}
              contentContainerStyle={styles.gridContainer}
            />
            <View>
              <TouchableOpacity onPress={!selectedSintom ? undefined : handleApply} style={styles.apply}>
                <Text style={{ fontWeight: '600', color: 'white', textAlign: 'center' }}>Aplicar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{ width: '100%', alignItems: 'center', padding: 20 }}>
            <Image style={{ width: 40, height: 40 }} source={require('../../assets/icons/lightbulb.png')}></Image>
            <Text style={{ color: '#9D47B2', fontWeight: '700', fontSize: 20 }}>¡Consejo del dia!</Text>
            <Text style={{ margin: 20, color: '#533A8E' }}>{tip.tip_description}</Text>
            <TouchableOpacity onPress={() => setshowModal(false)} style={styles.gotoCalendar}>
              <Text style={{ fontWeight: '600', color: 'white', textAlign: 'center' }}>¡Ir a calendario!</Text>
            </TouchableOpacity>
          </View>
        )}
      </GenericModalComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    fontSize: 7,
    color: '#533A8E',
    fontWeight: '700'
  },
  gridContainer: {
    alignItems: 'center',
    padding: 20
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 4,
    marginHorizontal: 8,
    marginVertical: 15
  },
  apply: {
    padding: 5,
    width: '40%',
    backgroundColor: '#B045CB',
    alignSelf: 'center',
    position: 'absolute',
    bottom: -10,
    borderRadius: 20
  },
  editCalendarBtn: {
    marginTop: 50,
    padding: 15,
    width: '100%',
    backgroundColor: '#B045CB',
    alignSelf: 'center',
    borderRadius: 20
  },
  gotoCalendar: {
    padding: 5,
    width: '40%',
    backgroundColor: '#B045CB',
    alignSelf: 'center',
    borderRadius: 20
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: LayoutUtils.moderateScale(20)
  },
  calendar: {
    width: width * 0.85
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'cover'
  }
})
