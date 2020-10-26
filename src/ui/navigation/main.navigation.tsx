import {IconButton} from '@components/IconButton.component'
import {useAuthAction} from '@hooks/useAction.hook'
import {useNavigation} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '@ui/home/Home.screen'
import RankingScreen from '@ui/ranking/Ranking.screen'
import React, {useCallback} from 'react'

import {MainNamesEnum} from './names.navigation'
import {defaultStackNavigationOptions} from './navigation.styles'

export const MainStack: React.FC = () => (
  <Navigator initialRouteName={MainNamesEnum.Home} screenOptions={defaultStackNavigationOptions}>
    <Screen
      name={MainNamesEnum.Home}
      component={HomeScreen}
      options={{title: 'EcoFast', headerRight: () => <Logout />, headerLeft: () => <Trophy />}}
    />
    <Screen name={MainNamesEnum.Ranking} component={RankingScreen} options={{title: 'Ranking'}} />
  </Navigator>
)

const Logout: React.FC = React.memo(() => {
  const logout = useAuthAction('logout')
  return <IconButton name="logout" uses="material" size={24} onPress={logout} right={15} />
})
const Trophy: React.FC = React.memo(() => {
  const {navigate} = useNavigation()
  const nav = useCallback(() => navigate(MainNamesEnum.Ranking), [])
  return <IconButton name="trophy" uses="material-community" size={24} onPress={nav} left={15} />
})
const {Screen, Navigator} = createStackNavigator()
