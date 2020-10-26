import {pointActions} from '@slices/point.slice'
import {TPointState} from '@slices/root.slice'
import {TEpic} from '@type/TEpic'
import {onError} from '@util/onError.util'
import {Alert} from 'react-native'
import {filter, ignoreElements, map, switchMap, tap, withLatestFrom} from 'rxjs/operators'

const e: TEpic[] = []

e[e.length] = (action$, state$, {api}) =>
  action$.pipe(
    filter(pointActions.recycle.match),
    withLatestFrom(state$),
    switchMap(([{payload}, {auth}]) => api.recyclePoints({...payload, sub: auth.sub})),
    tap(() => Alert.alert('Recycled', 'Reclyced successfully')),
    ignoreElements(),
    onError(state$),
  )

e[e.length] = (action$, state$, {api}) =>
  action$.pipe(
    filter(pointActions.getRankings.match),
    switchMap(api.getPoints),
    map(res => {
      const state: TPointState = {
        keys: [],
        points: {},
      }
      const sorted = res.data.sort((a, b) => b.total - a.total)
      sorted.forEach(p => {
        state.points[p._id] = p
        state.keys.push(p._id)
      })
      return state
    }),
    map(pointActions.setRankings),
    onError(state$),
  )

export const pointEpics = e
