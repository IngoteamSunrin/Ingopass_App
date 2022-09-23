import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Council from '@screens/Council'
import Settings from '@screens/Settings'
import Notification from '@screens/Notification'
import Header from '@components/header'
import BottomNavigation from './bottomNavigation'
const Stack = createNativeStackNavigator()

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Screen
        name="Council"
        component={Council}
        options={{ headerTitle: Header }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: Header }}
      />

      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerTitle: Header }}
      />

      <BottomNavigation />
    </NavigationContainer>
  )
}

export default RootNavigator
