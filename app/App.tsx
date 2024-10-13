
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BootSplash from 'react-native-bootsplash'
import LoginScreen from '@screens/LoginScreen';
import SignUpOptsScreen from '@screens/SignUpOptsScreen';
import RegisterScreen from '@screens/RegisterScreen';
import WelcomeScreen from '@screens/WelcomeScreen';




const App: React.FC = () => {


  const Stack = createStackNavigator();

    useEffect(() => {
    ;(async () => {
      await BootSplash.hide({ fade: true })
    })()
  }, [])

 
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpOpts">
        <Stack.Screen name="SignUpOpts" options={{headerShown:false}}  component={SignUpOptsScreen} />
        <Stack.Screen name="Register" options={{headerShown:false}}  component={RegisterScreen} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
        <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
      </Stack.Navigator> 
    </NavigationContainer>  
  );
}

export default App
