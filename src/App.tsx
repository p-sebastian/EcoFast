import {rootEpic} from '@epics/root.epic'
import {RootNamesEnum} from '@navigation/names.navigation'
import {RootStack} from '@navigation/root.navigation'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {RootState, rootReducer} from '@slices/root.slice'
import {Theme} from '@util/colors.util'
import React, {useEffect, useState} from 'react'
import {StatusBar} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-view'
import {Provider} from 'react-redux'
import {AnyAction, Store} from 'redux'
import {Persistor} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import {ThemeProvider} from 'styled-components'

import {createStoreWithMiddleware} from './redux/store'

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

declare const global: {HermesInternal: null | {}}

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

  useEffect(() => {
    const {store, persistor} = createStoreWithMiddleware<RootState, AnyAction>(
      rootEpic,
      rootReducer,
    )
    setStore(store)
    setPersistor(persistor)
  }, [])

  return {store, persistor}
}

const {Navigator, Screen} = createStackNavigator()

export default App
