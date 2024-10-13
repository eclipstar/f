import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';
import Button from '@ui/components/Button';
import colors from '@config/theme/colors';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email es requerido'),
  password: Yup.string().min(6, 'Muy corto!').required('Contraseña es requerida'),
});

interface Props {
    onSubmit: Function
}

const LoginForm = ({onSubmit}: Props ) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={SignupSchema}
    onSubmit={values => {
      onSubmit(values)
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }: any) => (
      <View style={styles.container}>
        <View style={styles.spacing}>
            <TextField
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Correo"
            />
            {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>
        <View style={styles.spacing}>
            <TextField
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Contraseña"
            secureTextEntry
            />
            {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>
        <View style={styles.buttonContainer}>
            <Button appearance='filled' color={colors.primary} handleClick={() => {handleSubmit()}} rounded>
                INGRESA
            </Button>
        </View>
        
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop:25
    },
    container: {
        width:'90%',
    },
    spacing: {
        marginBottom:20
    },
    errorText: {
        color:'red'
    }
});
export default LoginForm;
