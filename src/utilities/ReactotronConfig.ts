import AsyncStorage from '@react-native-community/async-storage'
import {NativeModules} from 'react-native'
import Reactotron from 'reactotron-react-native'
import {reactotronRedux} from 'reactotron-redux'

const createReactotron = () => {
  const scriptURL = NativeModules.SourceCode.scriptURL
  const scriptHostname = scriptURL.split('://')[1].split(':')[0]
  let reactotron = Reactotron.configure({
    name: 'EcoFast',
    host: scriptHostname,
  }) // controls connection & communication settings
    .use(reactotronRedux())
    .useReactNative() // add all built-in react native plugins

  if (reactotron.setAsyncStorageHandler) {
    reactotron = reactotron.setAsyncStorageHandler(AsyncStorage)
  }

  return reactotron.connect() // let's connect!
}

export default createReactotron
