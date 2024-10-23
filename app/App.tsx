/* eslint-disable react/no-unstable-nested-components */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BootSplash from 'react-native-bootsplash'
import 'react-native-gesture-handler'
import { PaperProvider } from 'react-native-paper'

import { Header } from '@ui/components/Header'

import LoginScreen from '@screens/LoginScreen'
import RegisterScreen from '@screens/RegisterScreen'
import SignUpOptsScreen from '@screens/SignUpOptsScreen'
import WelcomeScreen from '@screens/WelcomeScreen'
import { TabNavigationBar } from '@screens/protected/TabNavigationBar'

const App: React.FC = () => {
  const Stack = createStackNavigator()

  useEffect(() => {
    ;(async () => {
      await BootSplash.hide({ fade: true })
    })()
  }, [])

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name='SignUpOpts' options={{ headerShown: false }} component={SignUpOptsScreen} />
          <Stack.Screen name='Register' options={{ headerShown: false }} component={RegisterScreen} />
          <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name='Welcome' options={{ headerShown: false }} component={WelcomeScreen} />
          <Stack.Screen
            name='Main'
            options={{
              header: () => <Header />,
              headerShown: true // Aquí puedes mostrar un header persistente si lo deseas
            }}
            component={TabNavigationBar}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
