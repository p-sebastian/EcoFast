import {locationActions} from '@slices/location.slice'
import {TLocationState} from '@slices/root.slice'
import {TEpic} from '@type/TEpic'
import {onError} from '@util/onError.util'
import {filter, map, switchMap} from 'rxjs/operators'

const e: TEpic[] = []

e[e.length] = (action$, state$, {api}) =>
  action$.pipe(
    filter(locationActions.getLocations.match),
    switchMap(api.getLocations),
    map(res => {
      const state: TLocationState = {
        keys: [],
        locations: {},
      }
      res.data.forEach(loc => {
        state.locations[loc._id] = loc
        state.keys.push(loc._id)
      })
      return state
    }),
    map(locationActions.setLocations),
    onError(state$),
  )

export const locationEpics = e
