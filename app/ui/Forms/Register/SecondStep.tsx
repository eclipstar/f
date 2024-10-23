/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Logo from '../../../../logo.svg'
import TextField from '../TextField'
import { Picker } from '@react-native-picker/picker'
import { Formik } from 'formik'
import { ScrollView } from 'react-native-gesture-handler'
import * as Yup from 'yup'

import Button from '@ui/components/Button'
import Title from '@ui/tipografy/Title'

import colors from '@config/theme/colors'

const SignupSchema = Yup.object().shape({
  pronoun: Yup.string().min(4, 'Muy corto!').required('El pronombre es requerido'),
  day: Yup.number().max(31, 'Solo dias calendario validos').required('El dia es requerido'),
  month: Yup.number().min(1).max(12).required('El mes es requerido'),
  year: Yup.number()
    .min(1950, 'Anio no puede ser menor 1950')
    .max(new Date().getFullYear(), `El anio no debe ser mayor a ${new Date().getFullYear()}`)
    .required('El anio es requerido'),
  location: Yup.string().required('El departamento es requerido')
})

interface Props {
  onSubmit: Function
}

export function SecondStepForm({ onSubmit }: Props) {
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

  const departments = [
    { text: 'Seleccione un departamento', value: null },
    { text: 'Ahuachapán', value: 'Ahuachapán' },
    { text: 'Cabañas', value: 'Cabañas' },
    { text: 'Chalatenango', value: 'Chalatenango' },
    { text: 'Cuscatlán', value: 'Cuscatlán' },
    { text: 'La Libertad', value: 'La Libertad' },
    { text: 'La Paz', value: 'La Paz' },
    { text: 'La Unión', value: 'La Unión' },
    { text: 'Morazán', value: 'Morazán' },
    { text: 'San Miguel', value: 'San Miguel' },
    { text: 'San Salvador', value: 'San Salvador' },
    { text: 'Santa Ana', value: 'Santa Ana' },
    { text: 'San Vicente', value: 'San Vicente' },
    { text: 'Sonsonate', value: 'Sonsonate' },
    { text: 'Usulután', value: 'Usulután' }
  ]

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>
        <View style={styles.appLogoContainer}>
          <Logo width={100} height={100} />
        </View>
        <View style={styles.stepProgressContainer}>
          <View style={styles.activeStep} />
          <View style={styles.step} />
        </View>

        <Formik
          initialValues={{ day: null, month: null, year: null, location: '', pronoun: '' }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(values)
            onSubmit(values)
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }: any) => (
            <View style={styles.formContainer}>
              <Title style={{ textAlign: 'center' }}>¡Cuéntanos sobre tí!</Title>
              <Text style={styles.labelDecription}>
                Queremos conocerte y saber más de tí para brindarte una atención más personalizada.
              </Text>
              <View style={styles.controlsContainer}>
                <View style={styles.spacing}>
                  <TextField
                    label='¿Cómo te gusta que te digan?'
                    onChangeText={handleChange('pronoun')}
                    onBlur={handleBlur('pronoun')}
                    value={values.pronoun}
                    placeholder='Pronombre'
                  />
                  {errors.pronoun && touched.pronoun && <Text style={styles.errorText}>{errors.pronoun}</Text>}
                </View>

                <Text style={styles.label}>Fecha de nacimiento</Text>
                <View style={styles.dateOfBirthContainer}>
                  <View style={styles.pickerWapper}>
                    <TextField
                      keyBoardType='number-pad'
                      onChangeText={handleChange('day')}
                      onBlur={handleBlur('day')}
                      value={values.day}
                      placeholder='Dia'
                    />
                  </View>
                  <View style={styles.pickerWapper2}>
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
                  <View style={styles.pickerWapper}>
                    <TextField
                      keyBoardType='number-pad'
                      onChangeText={handleChange('year')}
                      onBlur={handleBlur('year')}
                      value={values.year}
                      placeholder='Anio'
                    />
                  </View>
                </View>
                {errors.day && touched.day && <Text style={styles.errorText}>{errors.day}</Text>}
                {errors.month && touched.month && <Text style={styles.errorText}>{errors.month}</Text>}
                {errors.year && touched.year && <Text style={styles.errorText}>{errors.year}</Text>}

                <View style={styles.spacing} />
                <Text style={styles.label}>¿De dónde eres?</Text>
                <View style={{ ...styles.pickerWapper2 }}>
                  <Picker
                    selectedValue={values.location}
                    style={styles.picker}
                    onValueChange={itemValue => setFieldValue('location', itemValue)}
                  >
                    {departments.map(el => (
                      <Picker.Item key={el.value} label={el.text} value={el.value} />
                    ))}
                  </Picker>
                </View>
                {errors.location && touched.location && (
                  <Text style={{ ...styles.errorText, ...styles.spacing }}>{errors.location}</Text>
                )}
                <View style={styles.buttonBox}>
                  <Button appearance='filled' color={colors.primary} handleClick={handleSubmit} rounded>
                    SIGUIENTE
                  </Button>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1
  },
  dateOfBirthContainer: {
    flexDirection: 'row',
    gap: 10
  },
  termsAndCondition: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 10,
    color: colors.secondaryTextColor,
    marginBottom: 20
  },
  pickerWapper: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#E0E0E0',
    height: 50,
    width: 'auto',
    alignSelf: 'stretch',
    flex: 1
  },
  pickerWapper2: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#E0E0E0',
    height: 50,
    width: 'auto',
    alignSelf: 'stretch',
    flex: 2
  },
  picker: {
    color: colors.primaryTextColor
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#000'
  },
  labelDecription: {
    color: colors.primaryTextColor,
    fontWeight: '600',
    textAlign: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
    paddingBottom: 30
  },
  label: {
    color: colors.primaryTextColor,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 5
  },
  mainContainer: {
    flex: 1,
    paddingTop: 55
  },
  stepProgressContainer: {
    flexDirection: 'row',
    gap: 29,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },
  activeStep: {
    width: 33,
    height: 33,
    borderRadius: 50,
    backgroundColor: colors.stepColor
  },
  step: {
    width: 16,
    height: 16,
    borderRadius: 50,
    backgroundColor: colors.stepColor
  },
  loginText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 25
  },
  buttonBox: {
    width: '100%',
    marginTop: 50
  },
  appLogoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30
  },
  formContainer: {
    flex: 4
  },
  controlsContainer: {
    marginTop: 5,
    width: '90%',
    margin: 'auto'
  },
  spacing: {
    marginBottom: 20
  },
  errorText: {
    color: 'red'
  }
})
