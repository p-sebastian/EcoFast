import {createStackNavigator} from '@react-navigation/stack'
import SignUpScreen from '@ui/auth/SignUp.screen'
import React from 'react'

import {AuthNamesEnum} from './names.navigation'

export const AuthStack: React.FC = () => (
  <Navigator initialRouteName={AuthNamesEnum.SignUp}>
    <Screen name={AuthNamesEnum.SignUp} component={SignUpScreen} />
  </Navigator>
)

const {Screen, Navigator} = createStackNavigator()
