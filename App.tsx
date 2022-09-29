import { QueryClient, QueryClientProvider } from 'react-query'
import RootNavigator from './src/navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Navigation from './src/navigation/Navigation'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

const App = () => {
  return (
    <RecoilRoot>
      <RootNavigator />
    </RecoilRoot>
  )
}

export default App
