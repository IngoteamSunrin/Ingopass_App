import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  Button,
  Pressable,
} from 'react-native'
import styled from 'styled-components/native'
import dayString from '../constants/dayString'
import { useRecoilState } from 'recoil'
import themeState from '@/store/theme'
import { contentsDesign, infoSec, itManagement, softWare } from '../theme/theme'
import Header from '@/components/header'
import Check from '@assets/icons/check.svg'
import { TouchableOpacity } from 'react-native'

const isCurrentTheme = (state, theme) => state == theme

const Settings = () => {
  const majorString = {
    CD: '콘텐츠디자인과',
    IT: 'IT경영과',
    SW: '소프트웨어과',
    IS: '정보보호과',
  }

  const getCurrentTheme = () => {
    switch (theme) {
      case contentsDesign:
        return 'CD'
      case itManagement:
        return 'IT'
      case softWare:
        return 'SW'
      case infoSec:
        return 'IS'
    }
  }

  const date: Date = new Date()
  const [theme, setTheme] = useRecoilState(themeState)
  const day: string = dayString[date.getDay()]
  return (
    <AppContainer>
      <Header />

      <ScrollView style={{ backgroundColor: theme.color.grade1 }}>
        <TitleText>테마 설정</TitleText>
        <ThemeSelector>
          {getCurrentTheme() == 'CD' ? (
            <ThemeButton
              style={{ backgroundColor: contentsDesign.color.highlight }}>
              <Check height={20} />
            </ThemeButton>
          ) : (
            <TouchableOpacity onPress={() => setTheme(contentsDesign)}>
              <ThemeButton
                style={{
                  backgroundColor: contentsDesign.color.highlight,
                }}></ThemeButton>
            </TouchableOpacity>
          )}
          {getCurrentTheme() == 'IT' ? (
            <ThemeButton
              style={{ backgroundColor: itManagement.color.highlight }}>
              <Check height={20} />
            </ThemeButton>
          ) : (
            <TouchableOpacity onPress={() => setTheme(itManagement)}>
              <ThemeButton
                style={{
                  backgroundColor: itManagement.color.highlight,
                }}></ThemeButton>
            </TouchableOpacity>
          )}
          {getCurrentTheme() == 'SW' ? (
            <ThemeButton style={{ backgroundColor: softWare.color.highlight }}>
              <Check height={20} />
            </ThemeButton>
          ) : (
            <TouchableOpacity onPress={() => setTheme(softWare)}>
              <ThemeButton
                style={{
                  backgroundColor: softWare.color.highlight,
                }}></ThemeButton>
            </TouchableOpacity>
          )}
          {getCurrentTheme() == 'IS' ? (
            <ThemeButton style={{ backgroundColor: infoSec.color.highlight }}>
              <Check height={20} />
            </ThemeButton>
          ) : (
            <TouchableOpacity onPress={() => setTheme(infoSec)}>
              <ThemeButton
                style={{
                  backgroundColor: infoSec.color.highlight,
                }}></ThemeButton>
            </TouchableOpacity>
          )}
        </ThemeSelector>
        <SelectedTheme>
          현재 선택된 테마는 <Theme>{majorString[getCurrentTheme()]}</Theme>{' '}
          입니다.
        </SelectedTheme>
      </ScrollView>
    </AppContainer>
  )
}

const SelectedTheme = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.color.grade5};
  margin-top: 16px;
  margin-left: 24px;
`

const Theme = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.color.grade7};
  font-weight: 600;
`

const ThemeButton = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  margin-right: 16px;
  background-color: blue;
  justify-content: center;
  align-items: center;
`

const ThemeSelector = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  margin-left: 24px;
`

const TitleText = styled.Text`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.color.grade8};
  margin-top: 15px;
  margin-left: 24px;
`

const AppContainer = styled.SafeAreaView`
  height: 100%;
  background-color: ${({ theme }) => theme.color.grade1}
  flex: 1;
`

export default Settings
