import {createStackNavigator} from '@react-navigation/stack'
import {AuthStateEnum} from '@slices/auth.slice'
import {useASelector} from '@util/recipies.util'
import React from 'react'

import {AuthStack} from './auth.navigation'
import {RootNamesEnum} from './names.navigation'

export const RootStack: React.FC = () => {
  const status = useASelector((state) => state.auth.status)

  if (status === AuthStateEnum.SignedIn) {
    return null
  }

  return (
    <Navigator initialRouteName={RootNamesEnum.AuthStack}>
      <Screen name={RootNamesEnum.AuthStack} component={AuthStack} />
    </Navigator>
  )
}

const {Screen, Navigator} = createStackNavigator()
