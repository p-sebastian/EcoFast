import {createStackNavigator} from '@react-navigation/stack'
import SignInScreen from '@ui/auth/SignIn.screen'
import SignUpScreen from '@ui/auth/SignUp.screen'
import React from 'react'

import {AuthNamesEnum} from './names.navigation'
import {defaultStackNavigationOptions} from './navigation.styles'

export const AuthStack: React.FC = () => (
  <Navigator initialRouteName={AuthNamesEnum.SignUp} screenOptions={defaultStackNavigationOptions}>
    <Screen name={AuthNamesEnum.SignUp} component={SignUpScreen} options={{title: 'Sign Up'}} />
    <Screen name={AuthNamesEnum.SignIn} component={SignInScreen} options={{title: 'Sign In'}} />
  </Navigator>
)

const {Screen, Navigator} = createStackNavigator()
