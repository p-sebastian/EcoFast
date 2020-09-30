import Reactotron from 'reactotron-react-native'

const fn = () => {}
const {log = fn, logImportant = fn, warn = fn, error = fn} = Reactotron
export const logger = __DEV__
  ? {
      log(...args: any[]) {
        log(args)
      },
      info(...args: any[]) {
        logImportant(args)
      },
      warn(...args: any[]) {
        warn(args)
      },
      error(...args: any[]) {
        error(args, '')
      },
    }
  : {
      log(..._: any[]) {},
      info(..._: any[]) {},
      warn(..._: any[]) {},
      error(..._: any[]) {},
    }
