/* eslint-disable react/no-unstable-nested-components */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import BootSplash from 'react-native-bootsplash'
import LoginScreen from '@screens/LoginScreen';
import SignUpOptsScreen from '@screens/SignUpOptsScreen';
import RegisterScreen from '@screens/RegisterScreen';
import WelcomeScreen from '@screens/WelcomeScreen';
import { Header } from '@ui/components/Header';
import { ProfileScreen } from '@screens/protected/ProfileScreen';
import { VideosScreen } from '@screens/protected/VideosScreen';
import { TabNavigationBar } from '@screens/protected/TabNavigationBar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';




const App: React.FC = () => {

  const Stack = createStackNavigator();

    useEffect(() => {
    ;(async () => {
      await BootSplash.hide({ fade: true })
    })()
  }, [])

 
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="SignUpOpts" options={{headerShown:false}}  component={SignUpOptsScreen} />
        <Stack.Screen name="Register" options={{headerShown:false}}  component={RegisterScreen} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
        <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
        <Stack.Screen 
          name="Main" 
          options={{
            header: () => <Header/>,
            headerShown: true, // Aquí puedes mostrar un header persistente si lo deseas
          }} 
          component={TabNavigationBar} 
        />
      </Stack.Navigator> 
    </NavigationContainer>  
  );
}

export default App
