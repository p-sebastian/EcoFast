import {authActions} from '@slices/auth.slice'
import {TEpic} from '@type/TEpic'
import {logger} from '@util/logger.util'
import {onError} from '@util/onError.util'
import {filter, ignoreElements, switchMap} from 'rxjs/operators'

const e: TEpic[] = []

e[e.length] = (action$, state$, {amplify, api}) =>
  action$.pipe(
    filter(authActions.signUp.match),
    switchMap(async ({payload}) => {
      const {email} = payload
      const sub = await amplify.signUp(payload)
      await api.createUser({email, sub})
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
      return authActions.signedIn(user!.sub)
    }),
    onError(state$),
  )

e[e.length] = (action$, state$, {amplify}) =>
  action$.pipe(filter(authActions.logout.match), switchMap(amplify.logout), ignoreElements(), onError(state$))

export const authEpics = e
