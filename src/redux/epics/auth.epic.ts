import {authActions} from '@slices/auth.slice'
import {TEpic} from '@type/TEpic'
import {logger} from '@util/logger.util'
import {onError} from '@util/onError.util'
import {concatAll, filter, switchMap} from 'rxjs/operators'

const e: TEpic[] = []

e[e.length] = (action$, state$, {amplify}) =>
  action$.pipe(
    filter(authActions.signUp.match),
    switchMap(async ({payload}) => {
      await amplify.signUp(payload)
      return authActions.registered()
    }),
    onError(state$),
  )

e[e.length] = (action$, state$, {amplify}) =>
  action$.pipe(
    filter(authActions.login.match),
    switchMap(async ({payload}) => {
      const user = await amplify.signIn(payload)
      logger.info(user)
      return authActions.signedIn()
    }),
    onError(state$),
  )

export const authEpics = e
