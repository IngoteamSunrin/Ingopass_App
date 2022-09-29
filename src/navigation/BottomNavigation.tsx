import styled, { DefaultTheme, withTheme } from 'styled-components/native'
import { WithLocalSvg } from 'react-native-svg'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StatusBar, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Device from '@assets/icons/device.svg'
import DeviceSelected from '@assets/icons/deviceSelected.svg'
import CardIcon from '@assets/icons/card.svg'
import Person from '@assets/icons/person.svg'
import PersonSelected from '@assets/icons/personSelected.svg'
import Home from '@assets/icons/home.svg'
import Main from '@screens/Main'
import MyInfo from '@screens/MyInfo'
import Products from '@screens/Products'
import Header from '@components/header'
import { ImageSourcePropType } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useEffect } from 'react'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { useRecoilValue } from 'recoil'
import themeState from '@/store/theme'

interface ItemProps {
  asset: ImageSourcePropType
  name: string
}

const NavItem = (props: ItemProps) => {
  return (
    <ItemContainer>
      <ItemName>{props.name}</ItemName>
    </ItemContainer>
  )
}

const NavItemSelected = (props: ItemProps) => {
  return (
    <ItemContainer>
      <WithLocalSvg height={26} asset={props.asset} />
      <ItemNameSelected>{props.name}</ItemNameSelected>
    </ItemContainer>
  )
}

interface ThemeProps {
  theme: {
    color: {
      [key: string]: string
    }
  }
}

const BottomNavigation: React.FC = () => {
  const theme = useRecoilValue(themeState)
  const Tab = createBottomTabNavigator()
  const devicePaths = ['Products', 'RecordStatus']
  const homePaths = ['Card', 'Main']
  const myInfoPaths = ['MyInfo', 'RentalRecord']

  return (
    <>
      <StatusBar backgroundColor={theme.color.grade1} barStyle="dark-content" />
      <SafeAreaProvider>
        <Tab.Navigator
          initialRouteName="Main"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Main') {
                return focused ? (
                  <CardItem>
                    <CardIcon height={26} fill={theme.color.grade7} />
                  </CardItem>
                ) : (
                  <ItemContainer>
                    <Home height={26} fill={theme.color.grade5} />
                    <ItemName>홈</ItemName>
                  </ItemContainer>
                )
              }

              if (route.name === 'Products') {
                return focused ? (
                  <ItemContainer>
                    <Device height={26} fill={theme.color.grade7} />
                    <ItemNameSelected>물품</ItemNameSelected>
                  </ItemContainer>
                ) : (
                  <ItemContainer>
                    <Device height={26} fill={theme.color.grade5} />
                    <ItemName>물품</ItemName>
                  </ItemContainer>
                )
              }
              if (route.name === 'MyInfo') {
                return focused ? (
                  <ItemContainer>
                    <PersonSelected height={26} fill={theme.color.grade7} />
                    <ItemNameSelected>내 정보</ItemNameSelected>
                  </ItemContainer>
                ) : (
                  <ItemContainer>
                    <Person height={26} fill={theme.color.grade5} />
                    <ItemName>내 정보</ItemName>
                  </ItemContainer>
                )
              }
            },
            tabBarStyle: [
              {
                height: 100,
                backgroundColor: theme.color.grade3,
                borderTopWidth: 0,
              },
              ,
            ],
            indicatorStyle: {
              width: 0,
              height: 0,
              elevation: 0,
            },
            style: {
              width: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'row',
              border: 'none',
            },
            tabBarLabelStyle: {
              fontWeight: '400',
              margin: 0,
              padding: 0,
              width: 52,
            },
            tabBarItemStyle: {
              width: 52,
              margin: 0,
              padding: 0,
            },
            labelStyle: { margin: 0, padding: 0 },
            tabBarActiveTintColor: theme.color.grade6,
            tabBarInactiveTintColor: theme.color.grade5,
            tabBarShowLabel: false,
            header: () => (
              <>
                <SafeAreaView
                  style={{ backgroundColor: theme.color.grade1, height: 56 }}>
                  <Header />
                </SafeAreaView>
              </>
            ),
            headerStyle: {
              flex: 1,
              textAlign: 'center',
            },
          })}>
          {/* {devicePaths.filter(item => item === route.name).length !== 0 ? (
          //   <NavItemSelected name="물품" asset={DeviceSelected} /> */}
          <Tab.Screen name="Products" component={Products} />
          <Tab.Screen name="Main" component={Main} />

          <Tab.Screen name="MyInfo" component={MyInfo} />

          {/* ) : (
          <TouchableOpacity onPress={() => navigation.navigate('Products')}>
            <NavItem name="물품" asset={Device} />
          </TouchableOpacity>
        )}
        {homePaths.filter(item => item === route.name).length !== 0 ? (
          <CardItem>
            <WithLocalSvg height={26} asset={Card} />
          </CardItem>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <NavItem name="홈" asset={Home} />
          </TouchableOpacity>
        )}

        {myInfoPaths.filter(item => item === route.name).length !== 0 ? (
          <NavItemSelected name="내 정보" asset={PersonSelected} />
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate('MyInfo')}>
            <NavItem name="내 정보" asset={Person} />
          </TouchableOpacity>
        )} */}
        </Tab.Navigator>
      </SafeAreaProvider>
    </>
  )
}
export default withTheme(BottomNavigation)

const CardItem = styled.View`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: ${({ theme }: ThemeProps) => theme.color.grade4};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ItemContainer = styled.View`
  height: 45px;
  justify-content: space-between;
  align-items: center;
`

const ItemName = styled.Text`
  color: ${({ theme }: ThemeProps) => theme.color.grade5};
  font-weight: 400;
  font-size: 12px;
`

const ItemNameSelected = styled.Text`
  color: ${({ theme }: ThemeProps) => theme.color.grade7};
  font-weight: 500;
  font-size: 12px;
`
