import styled from 'styled-components/native'
import { WithLocalSvg } from 'react-native-svg'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Device from 'assets/icons/device.svg'
import DeviceSelected from 'assets/icons/deviceSelected.svg'
import CardIcon from 'assets/icons/card.svg'
import Person from 'assets/icons/person.svg'
import PersonSelected from 'assets/icons/personSelected.svg'
import Home from 'assets/icons/home.svg'
import Main from 'screens/Main'
import Council from 'screens/Council'
import MyInfo from 'screens/MyInfo'
import RentalStatus from 'screens/RentalStatus'
import Settings from 'screens/Settings'
import RentalRecord from 'screens/RentalRecord'
import Products from 'screens/Products'
import Notice from 'screens/Notice'
import Notification from 'screens/Notification'
import Card from 'screens/Card'
import Header from 'components/header'
import { ImageSourcePropType } from 'react-native'

interface ItemProps {
  asset: ImageSourcePropType
  name: string
}

const Tab = createBottomTabNavigator()

function NavItem(props: ItemProps) {
  return (
    <ItemContainer>
      <WithLocalSvg height={26} asset={props.asset} />
      <ItemName>{props.name}</ItemName>
    </ItemContainer>
  )
}

function NavItemSelected(props: ItemProps) {
  return (
    <ItemContainer>
      <WithLocalSvg height={26} asset={props.asset} />
      <ItemNameSelected>{props.name}</ItemNameSelected>
    </ItemContainer>
  )
}

const BottomNavigation: React.FC = () => {
  const devicePaths = ['Products', 'RecordStatus']
  const homePaths = ['Card', 'Main']
  const myInfoPaths = ['MyInfo', 'RentalRecord']
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Main') {
            return focused ? (
              <CardItem>
                <WithLocalSvg height={26} asset={CardIcon} />
              </CardItem>
            ) : (
              <NavItem name="홈" asset={Home} />
            )
          }

          if (route.name === 'Products') {
            return focused ? (
              <NavItemSelected name="물품" asset={DeviceSelected} />
            ) : (
              <NavItem name="물품" asset={Device} />
            )
          }
          if (route.name === 'MyInfo') {
            return focused ? (
              <NavItemSelected name="내 정보" asset={PersonSelected} />
            ) : (
              <NavItem name="내 정보" asset={Person} />
            )
          }
        },
        tabBarStyle: [
          {
            height: '12%',
            backgroundColor: '#e9edf6',
          },
          ,
        ],
        style: {
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
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
        tabBarActiveTintColor: '#3c4963',
        tabBarInactiveTintColor: '#7a86a0',
        tabBarShowLabel: false,
      })}>
      {/* {devicePaths.filter(item => item === route.name).length !== 0 ? (
          //   <NavItemSelected name="물품" asset={DeviceSelected} /> */}
      <Tab.Screen
        name="Products"
        component={Products}
        options={{ headerTitle: Header }}
      />
      <Tab.Screen
        name="Main"
        component={Main}
        options={{ headerTitle: Header }}
      />

      <Tab.Screen
        name="MyInfo"
        component={MyInfo}
        options={{ headerTitle: Header }}
      />

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
  )
}
export default BottomNavigation

const CardItem = styled.View`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: #dae1ee;
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
  color: #7a86a0;
  font-weight: 400;
  font-size: 12px;
`

const ItemNameSelected = styled.Text`
  color: #3c4963;
  font-weight: 500;
  font-size: 12px;
`
