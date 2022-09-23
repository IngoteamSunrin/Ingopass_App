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
const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Card"
          component={Card}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Council"
          component={Council}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyInfo"
          component={MyInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RentalStatus"
          component={RentalStatus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RentalRecord"
          component={RentalRecord}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
