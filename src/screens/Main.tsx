import React from 'react'
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import Announce from '../assets/icons/announce.svg'
import Umbrella from '@assets/icons/umbrella.svg'
import Store from '../assets/icons/store.svg'
import dayString from '../constants/dayString'
import CardBox from '../components/CardBox'
import { contentsDesign } from '@/theme/theme'
import { useRecoilValue } from 'recoil'
import themeState from '@/store/theme'

const exampleNotice = `BackUP X IngoTeam
인고패스에서 편리한 선린 생활을 누려보세요 !`

const exampleMealData = [
  '통밀밥',
  '부대찌개',
  '궁중떡볶이',
  '생선(광어)까스',
  '총각김치',
  '개별김',
]

const exampleRentalStatusData = [
  {
    product: 'umbrella',
    returnDate: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
  {
    product: 'umbrella',
    returnDate: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
  {
    product: 'umbrella',
    returnDate: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
  {
    product: 'umbrella',
    returnDate: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
  {
    product: 'umbrella',
    returnDate: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
  {
    product: 'umbrella',
    returnDate: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
  {
    product: 'umbrella',
    returnDate: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
  {
    product: 'umbrella',
    returnDate: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
]

const examplestudentCardRecordData = [
  {
    type: 'store',
    usedAt: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
  {
    type: 'store',
    usedAt: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
  {
    type: 'store',
    usedAt: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
  {
    type: 'store',
    usedAt: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
  {
    type: 'store',
    usedAt: 'Thu Sep 29 2022 09:47:29 GMT+0900 (Korean Standard Time)',
  },
]

const Main = ({ navigation }) => {
  const theme = useRecoilValue(themeState)
  const date: Date = new Date()
  const day: string = dayString[date.getDay()]
  return (
    <ScrollView style={{ backgroundColor: '#fdfdff', marginTop: 20 }}>
      <AnnounceCard>
        <Announce width={24} fill={theme.color.highlight} />
        <AnnounceText>{exampleNotice}</AnnounceText>
      </AnnounceCard>
      <CardBox name={'급식'}>
        <CardSubtitle>
          {date.getMonth() + 1}월 {date.getDate()}일 {day}
        </CardSubtitle>
        <CardContent>{exampleMealData.join(',')}</CardContent>
      </CardBox>
      <CardBox
        name="대여 상태"
        directLink={true}
        onPress={() => navigation.push('RentalStatus')}>
        <ProductList horizontal={true}>
          <ProductItem>
            <Umbrella height={44} fill={theme.color.grade7} />
            <ProductName>우산</ProductName>
            <ProductRemainTime>5분 남음</ProductRemainTime>
          </ProductItem>
          <ProductItem>
            <Umbrella height={44} fill={theme.color.grade7} />
            <ProductName>우산</ProductName>
            <ProductRemainTime>5분 남음</ProductRemainTime>
          </ProductItem>
          <ProductItem>
            <Umbrella height={44} fill={theme.color.grade7} />
            <ProductName>우산</ProductName>
            <ProductRemainTime>5분 남음</ProductRemainTime>
          </ProductItem>
          <ProductItem>
            <Umbrella height={44} fill={theme.color.grade7} />
            <ProductName>우산</ProductName>
            <ProductRemainTime>5분 남음</ProductRemainTime>
          </ProductItem>
          <ProductItem>
            <Umbrella height={44} fill={theme.color.grade7} />
            <ProductName>우산</ProductName>
            <ProductRemainTime>5분 남음</ProductRemainTime>
          </ProductItem>
        </ProductList>
      </CardBox>
      <CardBox
        name="학생증 사용 기록"
        directLink={true}
        onPress={() => navigation.navigate('RentalRecord')}>
        <RecordList>
          <RecordItem>
            <RecordMain>
              <Store height={24} fill={theme.color.grade7} />
              <RecordName>매점</RecordName>
            </RecordMain>
            <RecordHistory>2시간 전</RecordHistory>
          </RecordItem>
          <RecordItem>
            <RecordMain>
              <Store height={24} fill={theme.color.grade7} />
              <RecordName>매점</RecordName>
            </RecordMain>
            <RecordHistory>2시간 전</RecordHistory>
          </RecordItem>
          <RecordItem>
            <RecordMain>
              <Store height={24} fill={theme.color.grade7} />
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
