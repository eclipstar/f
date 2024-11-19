import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import TextField from '../../ui/Forms/TextField'
import { Picker } from '@react-native-picker/picker'
import { Formik } from 'formik'
import { IGetGeneralUser } from 'interfaces/CreateUser.interface'
import * as Yup from 'yup'

import Button from '@ui/components/Button'

import colors from '@config/theme/colors'

const SignupSchema = Yup.object().shape({
  alias: Yup.string().min(4, 'Muy corto!').required('El pronombre es requerido'),
  email: Yup.string().email('Correo inválido').required('El correo es requerido'),
  day: Yup.number().max(31, 'Solo días calendario válidos').required('El día es requerido'),
  month: Yup.number().min(1).max(12).required('El mes es requerido'),
  year: Yup.number()
    .min(1950, 'El año no puede ser menor a 1950')
    .max(new Date().getFullYear(), `El año no debe ser mayor a ${new Date().getFullYear()}`)
    .required('El año es requerido')
})

interface Props {
  onSubmit: Function
  userInformation: IGetGeneralUser | null
}

export function ProfileInfo({ onSubmit, userInformation }: Props) {
  const birthDateParts = userInformation?.data?.birth_date ? userInformation.data.birth_date.split('/') : ['', '', '']

  const months = [
    { text: 'Seleccione un mes', value: null },
    { text: 'Enero', value: 1 },
    { text: 'Febrero', value: 2 },
    { text: 'Marzo', value: 3 },
    { text: 'Abril', value: 4 },
    { text: 'Mayo', value: 5 },
    { text: 'Junio', value: 6 },
    { text: 'Julio', value: 7 },
    { text: 'Agosto', value: 8 },
    { text: 'Septiembre', value: 9 },
    { text: 'Octubre', value: 10 },
    { text: 'Noviembre', value: 11 },
    { text: 'Diciembre', value: 12 }
  ]

  return (
    <ScrollView style={styles.scrollView}>
      <Formik
        initialValues={{
          alias: userInformation?.data?.alias || '',
          email: userInformation?.data?.email || '',
          day: birthDateParts[1] || '',
          month: birthDateParts[0] || null,
          year: birthDateParts[2] || ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          const dataToSend = {
            alias: values.alias,
            email: values.email,
            birth_date: `${values.month}/${values.day}/${values.year}`
          }
          onSubmit(dataToSend)
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }: any) => (
          <View style={styles.formContainer}>
            <View style={styles.spacing}>
              <Text style={styles.label}>Nombre / Usuario </Text>
              <TextField
                onChangeText={handleChange('alias')}
                onBlur={handleBlur('alias')}
                value={values.alias}
                placeholder='Pronombre'
              />
              {errors.alias && touched.alias && <Text style={styles.errorText}>{errors.alias}</Text>}
            </View>

            <View style={styles.spacing}>
              <Text style={styles.label}>Correo electrónico</Text>
              <TextField
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='Correo electrónico'
              />
              {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>

            <View style={styles.spacing}>
              <Text style={styles.label}>Fecha de nacimiento</Text>
              <View style={styles.dateOfBirthContainer}>
                <View style={{ width: 70 }}>
                  <TextField
                    keyBoardType='number-pad'
                    onChangeText={handleChange('day')}
                    onBlur={handleBlur('day')}
                    value={values.day}
                    placeholder='Día'
                  />
                </View>
                <View style={styles.pickerWrapperM}>
                  <Picker
                    selectedValue={values.month}
                    style={styles.picker}
                    onValueChange={itemValue => setFieldValue('month', itemValue)}
                  >
                    {months.map(el => (
                      <Picker.Item key={el.value} label={el.text} value={el.value} />
                    ))}
                  </Picker>
                </View>
                <View style={{ width: 70 }}>
                  <TextField
                    keyBoardType='number-pad'
                    onChangeText={handleChange('year')}
                    onBlur={handleBlur('year')}
                    value={values.year}
                    placeholder='Año'
                  />
                </View>
              </View>
              {errors.day && touched.day && <Text style={styles.errorText}>{errors.day}</Text>}
              {errors.month && touched.month && <Text style={styles.errorText}>{errors.month}</Text>}
              {errors.year && touched.year && <Text style={styles.errorText}>{errors.year}</Text>}
            </View>

            <Button appearance='filled' color={colors.primary} handleClick={handleSubmit} rounded>
              CONFIRMAR
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    width: '100%'
  },
  formContainer: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-evenly',
    paddingBottom: 20
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.primaryTextColor,
    textAlign: 'left'
  },
  spacing: {
    width: '90%',
    marginBottom: 35
  },
  pickerWrapper: {
    flex: 1,
    width: 10,
    marginHorizontal: 5
  },
  pickerWrapperM: {
    flex: 1,
    marginHorizontal: 5
  },
  pickerWrapperY: {
    flex: 1,
    width: 10,
    marginHorizontal: 5
  },
  dateOfBirthContainer: {
    flexDirection: 'row'
    // justifyContent: 'space-around',
    // width: '100%'
  },
  picker: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    color: colors.primary
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5
  }
})
