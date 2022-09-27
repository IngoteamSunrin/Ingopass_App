import React from 'react'
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import { WithLocalSvg } from 'react-native-svg'
import Announce from '../assets/icons/announce.svg'
import Umbrella from '../assets/icons/umbrella.svg'
import Store from '../assets/icons/store.svg'
import dayString from '../constants/dayString'
import CardBox from '../components/CardBox'

const Main = ({ navigation }) => {
  const date: Date = new Date()
  const day: string = dayString[date.getDay()]
  return (
    <ScrollView style={{ backgroundColor: '#fdfdff', marginTop: 20 }}>
      <AnnounceCard>
        <WithLocalSvg width={24} asset={Announce} />
        <AnnounceText>이것은 공지 테스트입니다.</AnnounceText>
      </AnnounceCard>
      <CardBox name={'급식'}>
        <CardSubtitle>
          {date.getMonth() + 1}월 {date.getDate()}일 {day}
        </CardSubtitle>
        <CardContent>
          차조밥, 부대찌개, 쭈돈불고기, 고르곤졸라피자, 석박지, 깻잎무쌈
        </CardContent>
      </CardBox>
      <CardBox
        name="대여 상태"
        directLink={true}
        onPress={() => navigation.push('RentalStatus')}>
        <ProductList horizontal={true}>
          <ProductItem>
            <WithLocalSvg height={44} asset={Umbrella} />
            <ProductName>우산</ProductName>
            <ProductRemainTime>5분 남음</ProductRemainTime>
          </ProductItem>
          <ProductItem>
            <WithLocalSvg height={44} asset={Umbrella} />
            <ProductName>우산</ProductName>
            <ProductRemainTime>5분 남음</ProductRemainTime>
          </ProductItem>
          <ProductItem>
            <WithLocalSvg height={44} asset={Umbrella} />
            <ProductName>우산</ProductName>
            <ProductRemainTime>5분 남음</ProductRemainTime>
          </ProductItem>
          <ProductItem>
            <WithLocalSvg height={44} asset={Umbrella} />
            <ProductName>우산</ProductName>
            <ProductRemainTime>5분 남음</ProductRemainTime>
          </ProductItem>
          <ProductItem>
            <WithLocalSvg height={44} asset={Umbrella} />
            <ProductName>우산</ProductName>
            <ProductRemainTime>5분 남음</ProductRemainTime>
          </ProductItem>
        </ProductList>
      </CardBox>
      <CardBox
        name="학생증 사용 기록"
        directLink={true}
        onPress={() => RootNavigation.navigate('RentalRecord')}>
        <RecordList>
          <RecordItem>
            <RecordMain>
              <WithLocalSvg height={24} asset={Store} />
              <RecordName>매점</RecordName>
            </RecordMain>
            <RecordHistory>2시간 전</RecordHistory>
          </RecordItem>
          <RecordItem>
            <RecordMain>
              <WithLocalSvg height={24} asset={Store} />
              <RecordName>매점</RecordName>
            </RecordMain>
            <RecordHistory>2시간 전</RecordHistory>
          </RecordItem>
          <RecordItem>
            <RecordMain>
              <WithLocalSvg height={24} asset={Store} />
              <RecordName>매점</RecordName>
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
  margin-top: 20px;
`

const CardContent = styled.Text`
  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.color.grade7};
  margin-top: 12px;
  width: 93%;
  line-height: 19px;
`

export default Main
