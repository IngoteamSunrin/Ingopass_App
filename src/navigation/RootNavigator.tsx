import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Council from '@screens/Council'
import Settings from '@screens/Settings'
import Notification from '@screens/Notification'
import Header from '@components/header'
import BottomNavigation from './BottomNavigation'
import { ThemeProvider } from 'styled-components'
import { contentsDesign, softWare, infoSec, itManagement } from '../theme/theme'
const Stack = createNativeStackNavigator()

const RootNavigator: React.FC = () => {
  return (
    <ThemeProvider theme={itManagement}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tab">
          <Stack.Screen
            name="Council"
            component={Council}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tab"
            component={BottomNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default RootNavigator
