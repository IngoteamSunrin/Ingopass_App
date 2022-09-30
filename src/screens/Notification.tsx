import React from 'react'
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native'
import styled, { DefaultTheme, withTheme } from 'styled-components/native'
import { WithLocalSvg } from 'react-native-svg'
import Announce from '../assets/icons/announce.svg'
import Umbrella from '../assets/icons/umbrella.svg'
import Store from '../assets/icons/store.svg'
import dayString from '../constants/dayString'
import CardBox from '../components/CardBox'
import Header from '@components/header'

const Council = ({ theme }: { theme: any }) => {
  const date: Date = new Date()
  const day: string = dayString[date.getDay()]
  return (
    <AppContainer>
      <Header />
      <ScrollView style={{ backgroundColor: theme.color.grade1 }}></ScrollView>
    </AppContainer>
  )
}

const AppContainer = styled.SafeAreaView`
  height: 100%;
  background-color: ${({ theme }) => theme.color.grade1};
  flex: 1;
`

export default withTheme(Council)
