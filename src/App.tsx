import {rootEpic} from '@epics/root.epic'
import {RootNamesEnum} from '@navigation/names.navigation'
import {RootStack} from '@navigation/root.navigation'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {AmplifyService} from '@services/amplify.service'
import {RootState, rootReducer} from '@slices/root.slice'
import {TServices} from '@type/TServices'
import {Theme} from '@util/colors.util'
import Amplify from 'aws-amplify'
import React, {useEffect, useState} from 'react'
import {StatusBar} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-view'
import {Provider} from 'react-redux'
import {AnyAction, Store} from 'redux'
import {Persistor} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import {ThemeProvider} from 'styled-components'

import amplifyConfig from './aws-exports.js'
import {createStoreWithMiddleware} from './redux/store'

const App = () => {
  const {persistor, store} = useInit()
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        {store === null || persistor === null ? (
          <>{null}</>
        ) : (
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <NavigationContainer>
                <Navigator
                  screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                  }}>
                  <Screen
                    name={RootNamesEnum.RootStack}
                    component={RootStack}
                  />
                </Navigator>
              </NavigationContainer>
            </PersistGate>
          </Provider>
        )}
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

const useInit = () => {
  const [store, setStore] = useState<Store | null>(null)
  const [persistor, setPersistor] = useState<Persistor | null>(null)
  const [, setServices] = useState<TServices>()

  useEffect(() => {
    Amplify.configure(amplifyConfig)
    const _services = {amplify: AmplifyService.getInstance()}
    const {store, persistor} = createStoreWithMiddleware<
      RootState,
      AnyAction,
      TServices
    >(rootEpic, rootReducer, _services)
    setStore(store)
    setPersistor(persistor)
    setServices(_services)
  }, [])

  return {store, persistor}
}

const {Navigator, Screen} = createStackNavigator()

export default App
