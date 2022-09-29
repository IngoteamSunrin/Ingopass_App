import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Council from '@screens/Council'
import Settings from '@screens/Settings'
import Notification from '@screens/Notification'
import BottomNavigation from './BottomNavigation'
import { ThemeProvider } from 'styled-components'
import { contentsDesign, softWare, infoSec, itManagement } from '../theme/theme'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { useEffect } from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import withTheme from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from '@components/header'
import { useRecoilValue } from 'recoil'
import themeState from '@/store/theme'

const Stack = createNativeStackNavigator()

const RootNavigator: React.FC = () => {
  const theme = useRecoilValue(themeState)
  const setNavigationColor = (color) => {
    changeNavigationBarColor(color)
  }
  const testSetTranslucent = () => {
    changeNavigationBarColor('translucent', false)
  }

  const testSetTransparent = () => {
    changeNavigationBarColor('transparent', true)
  }

  useEffect(() => {
    testSetTransparent()
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={contentsDesign.color.grade1}
          barStyle="dark-content"
        />
        <SafeAreaProvider>
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
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default RootNavigator
