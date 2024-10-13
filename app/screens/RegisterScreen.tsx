import { StackNavigationProp } from '@react-navigation/stack';
import { FirstStepForm } from '@ui/Forms/Register/FirstStepForm';
import { SecondStepForm } from '@ui/Forms/Register/SecondStep';
import {ThirdStepForm} from '@ui/Forms/Register/ThirdStepForm';
import { User } from 'interfaces/Auth.inteface';
import React, { useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import useAuthStore from '../store/useAuthStore';

export type RootStackParamList = {
    Register: undefined;
    Login: undefined;
    SignUpOpts: undefined;
    Welcome: undefined;
  };

  type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;
  interface Props {
    navigation: RegisterScreenNavigationProp;
  }

function RegisterScreen({navigation} : Props) {

    const { setUser } = useAuthStore()
    const [step, setstep] = useState<number>(1)


    const handleFirstStep = (data: User) => {
        setUser(data)
        setstep(2);
        
    }
    
    const handleSecondStep = (data: User) => {
        setUser(data)
        setstep(3);
        
    }
    
    const handleThirdStep = (data: User) => {
        setUser(data)
        navigation.navigate('Welcome')

    }
    return (
        <SafeAreaView style={styles.container}>
            {step === 1 && <FirstStepForm onSubmit={handleFirstStep} navigation={navigation} />}
            {step === 2 && <SecondStepForm onSubmit={handleSecondStep} />}
            {step === 3 && <ThirdStepForm  onSubmit={handleThirdStep}/>}
             
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      text: {
        fontSize: 25,
        fontWeight: '500',
      },
      
    });
  

export default RegisterScreen