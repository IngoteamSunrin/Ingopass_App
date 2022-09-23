import * as React from 'react';

import Main from '../screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Card from '../screens/Card';
import Council from '../screens/Council';
import MyInfo from '../screens/MyInfo';
import RentalStatus from '../screens/RentalStatus';
import Settings from '../screens/Settings';
import RentalRecord from '../screens/RentalRecord';
import Products from '../screens/Products';
import Notice from '../screens/Notice';
import Notification from '../screens/Notification';
import Header from '../components/header';
import BottomNavigation from '../components/bottomNavigation';
const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerTitle: Header}}
        />
        <Stack.Screen
          name="Card"
          component={Card}
          options={{headerTitle: Header}}
        />
        <Stack.Screen
          name="Council"
          component={Council}
          options={{headerTitle: Header}}
        />
        <Stack.Screen
          name="MyInfo"
          component={MyInfo}
          options={{headerTitle: Header}}
        />
        <Stack.Screen
          name="RentalStatus"
          component={RentalStatus}
          options={{headerTitle: Header}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerTitle: Header}}
        />
        <Stack.Screen
          name="RentalRecord"
          component={RentalRecord}
          options={{headerTitle: Header}}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{headerTitle: Header}}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{headerTitle: Header}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
      </Stack.Navigator> */}
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default RootNavigator;
