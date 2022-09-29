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

const Settings = () => {
  const date: Date = new Date()
  const [theme, setTheme] = useRecoilState(themeState)
  const day: string = dayString[date.getDay()]
  return (
    <AppContainer>
      <Header />
      <ScrollView style={{ backgroundColor: theme.color.grade1 }}>
        <ChangeButton onPress={() => setTheme(contentsDesign)}>
          <TextH>콘텐츠디자인과 테마 적용하기</TextH>
        </ChangeButton>
        <ChangeButton onPress={() => setTheme(itManagement)}>
          <TextH>IT경영과 테마 적용하기</TextH>
        </ChangeButton>
        <ChangeButton onPress={() => setTheme(softWare)}>
          <TextH>소프트웨어과 테마 적용하기</TextH>
        </ChangeButton>
        <ChangeButton onPress={() => setTheme(infoSec)}>
          <TextH>정보보호과 테마 적용하기</TextH>
        </ChangeButton>
      </ScrollView>
    </AppContainer>
  )
}

const TextH = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.color.grade5};
`

const ChangeButton = styled.Pressable`
  margin: 10px;
  background-color: ${({ theme }) => theme.color.grade2};
  border-radius: 20px;
  padding: 24px 20px;
`

const RecordName = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: #3c4963;
  margin-left: 8px;
`

const RecordMain = styled.View`
  flex-direction: row;
  align-items: center;
`

const RecordHistory = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: #7a86a0;
`

const RecordItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 43px;
`

const RecordList = styled.View`
  margin-top: 16px;
  width: 100%;
`

const ProductList = styled.ScrollView`
  margin-top: 24px;
`

const ProductName = styled.Text`
  font-weight: 500;
  font-size: 15px;
  margin-top: 4px;
  color: #3c4963;
`

const ProductRemainTime = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: #ff7787;
  margin-top: 4px;
`

const ProductItem = styled.View`
  background-color: #e9edf6;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 112px;
  margin-right: 12px;
  border-radius: 16px;
`

const AppContainer = styled.SafeAreaView`
  height: 100%;
  background-color: ${({ theme }) => theme.color.grade1}
  flex: 1;
`

const AnnounceText = styled.Text`
  font-weight: 500;
  font-size: 15px;
  color: #2a509d;
  margin-left: 10px;
`

const AnnounceCard = styled.View`
  padding: 16px 18px;
  background-color: #f3f5fa;
  border-radius: 20px;
  margin: 20px 24px 0 20px;
  flex-direction: row;
  align-items: center;
`

const CardSubtitle = styled.Text`
  font-weight: 400;
  font-size: 15px;
  color: #7a86a0;
  margin-top: 20px;
`

const CardContent = styled.Text`
  font-weight: 500;
  font-size: 15px;
  color: #3c4963;
  margin-top: 12px;
  width: 93%;
  line-height: 19px;
`

export default Settings
