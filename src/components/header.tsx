import styled from 'styled-components/native'
import { WithLocalSvg } from 'react-native-svg'
import IngopassLogo from '../assets/appLogo.svg'
import Settings from '../assets/icons/settings.svg'
import Support from '../assets/icons/support.svg'
import Notification from '../assets/icons/notification.svg'
import Back from '../assets/icons/back.svg'

import { Text } from 'react-native'

import {
  useNavigation,
  useNavigationContainerRef,
  useRoute,
} from '@react-navigation/native'
import { TouchableOpacity, View, SafeAreaView, StatusBar } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import Navigation from '@assets/icons/navigation.svg'
import * as RootNavigation from '../navigation/RootNavigation'
import withTheme from 'styled-components/native'
import themeState from '@/store/theme'
import { useRecoilState, useRecoilValue } from 'recoil'

const TextWithActions = ['MyInfo', 'Products']
const IconWith = ['MyInfo', 'Products', 'Main']

const routeString = {
  Products: '물품',
  MyInfo: '내 정보',
  Council: '학생회',
  Notification: '알림',
  Notice: '공지사항',
  RentalStatus: '대여 상태',
  RentalRecord: '대여 기록',
  Settings: '설정',
}

const Header = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  const route = useRoute()
  const navigation = useNavigation()
  return (
    <>
      {IconWith.includes(route.name) ? (
        <Container>
          {TextWithActions.filter((item) => item === route.name).length !==
          0 ? (
            <HeaderTitle>{routeString[route.name]}</HeaderTitle>
          ) : (
            <IngopassLogo height={22} fill={theme.color.grade8} />
          )}
          <Icons>
            <TouchableOpacity onPress={() => navigation.push('Settings')}>
              <Settings height={22} fill={theme.color.grade5} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Council')}>
              <Support height={22} fill={theme.color.grade5} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Notification')}>
              <Notification height={22} fill={theme.color.grade5} />
            </TouchableOpacity>
          </Icons>
        </Container>
      ) : (
        <BackContainer>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back height={22} fill={theme.color.grade5} />
          </TouchableOpacity>
          <HeaderTitleMargin>{routeString[route.name]}</HeaderTitleMargin>
        </BackContainer>
      )}
    </>
  )
}
export default Header

const BackContainer = styled.View`
  height: 56px;
  background-color: ${({ theme }) => theme.color.grade1};
  width: 100%;
  align-items: center;
  padding: 0 20px;
  left: 0;
  top: 0;
  margin: 0;
  flex-direction: row;
  justify-content: flex-start;
`

const HeaderTitle = styled.Text`
  font-weight: 700;
  font-size: 22px;
  color: ${({ theme }) => theme.color.grade8};
`

const HeaderTitleMargin = styled.Text`
  font-weight: 700;
  font-size: 22px;
  color: ${({ theme }) => theme.color.grade8};
  margin-left: 24px;
`

const Container = styled.View`
  height: 56px;
  background-color: ${({ theme }) => theme.color.grade1};
  width: 100%;
  align-items: center;
  padding: 0 24px;
  left: 0;
  top: 0;
  margin: 0;
  flex-direction: row;
  justify-content: space-between;
`

const Icons = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100px;
`
