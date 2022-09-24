import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import RootNavigator from './RootNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}
