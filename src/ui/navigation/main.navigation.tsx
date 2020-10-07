import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '@ui/home/Home.screen'
import React from 'react'

import {MainNamesEnum} from './names.navigation'
import {defaultStackNavigationOptions} from './navigation.styles'

export const MainStack: React.FC = () => (
  <Navigator initialRouteName={MainNamesEnum.Home} screenOptions={defaultStackNavigationOptions}>
    <Screen name={MainNamesEnum.Home} component={HomeScreen} options={{title: 'Home'}} />
  </Navigator>
)

const {Screen, Navigator} = createStackNavigator()
