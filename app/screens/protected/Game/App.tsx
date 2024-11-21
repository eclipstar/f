import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParamList } from '@screens/SignUpOptsScreen'

import HomeScreen from './Index'
import TriviaScreen from './Trivia'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#9D47B2',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitleStyle: { fontWeight: 'bold' },
          headerBackTitle: 'Atrás'
        }}
      >
        <Stack.Screen name='MainGame' component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name='Juegos' component={TriviaScreen} options={{ title: 'Trivia', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
