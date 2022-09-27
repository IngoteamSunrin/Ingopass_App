import React from 'react'
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import { WithLocalSvg } from 'react-native-svg'
import Announce from '../assets/icons/announce.svg'
import Umbrella from '../assets/icons/umbrella.svg'
import UmbrellaSecond from '../assets/icons/umbrella_second.svg'
import Store from '../assets/icons/store.svg'
import dayString from '../constants/dayString'
import CardBox from '../components/CardBox'

const MyInfo = ({ navigation }) => {
  const date: Date = new Date()
  const day: string = dayString[date.getDay()]
  return (
    <ScrollView style={{ backgroundColor: '#fdfdff', marginTop: 20 }}>
      <CardBox name={'이민규'}>
        <CardSubtitle>IT경영과 2학년 8반 12번</CardSubtitle>
      </CardBox>
      <CardBox
        name="대여 기록"
        directLink={true}
        onPress={() => navigation.navigate('RentalRecord')}>
        <RecordList>
          <RecordItem>
            <RecordMain>
              <WithLocalSvg height={24} asset={UmbrellaSecond} />
              <RecordName>우산</RecordName>
            </RecordMain>
            <RecordHistory>2시간 전</RecordHistory>
          </RecordItem>
          <RecordItem>
            <RecordMain>
              <WithLocalSvg height={24} asset={UmbrellaSecond} />
              <RecordName>우산</RecordName>
            </RecordMain>
            <RecordHistory>2시간 전</RecordHistory>
          </RecordItem>
          <RecordItem>
            <RecordMain>
              <WithLocalSvg height={24} asset={UmbrellaSecond} />
              <RecordName>우산</RecordName>
            </RecordMain>
            <RecordHistory>2시간 전</RecordHistory>
          </RecordItem>
        </RecordList>
      </CardBox>
    </ScrollView>
  )
}

const RecordName = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.color.grade7};
  margin-left: 8px;
`

const RecordMain = styled.View`
  flex-direction: row;
  align-items: center;
`

const RecordHistory = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.color.grade5};
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
  color: ${({ theme }) => theme.color.grade7};
`

const ProductRemainTime = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: #ff7787;
  margin-top: 4px;
`

const ProductItem = styled.View`
  background-color: ${({ theme }) => theme.color.grade3};
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 112px;
  margin-right: 12px;
  border-radius: 16px;
`

const AppContainer = styled.SafeAreaView`
  height: 100%;
  background-color: ${({ theme }) => theme.color.grade1};
`

const AnnounceText = styled.Text`
  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.color.highlight};
  margin-left: 10px;
`

const AnnounceCard = styled.View`
  padding: 16px 18px;
  background-color: ${({ theme }) => theme.color.grade2};
  border-radius: 20px;
  margin: 20px 24px 0 20px;
  flex-direction: row;
  align-items: center;
`

const CardSubtitle = styled.Text`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.color.grade5};
  margin-top: 8px;
`

const CardContent = styled.Text`
  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.color.grade7};
  margin-top: 12px;
  width: 93%;
  line-height: 19px;
`

export default MyInfo
