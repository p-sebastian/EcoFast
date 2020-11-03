import {pointActions} from '@slices/point.slice'
import {restaurantActions} from '@slices/restaurant.slice'
import {TRestaurantState} from '@slices/root.slice'
import {TEpic} from '@type/TEpic'
import {onError} from '@util/onError.util'
import {Alert} from 'react-native'
import {filter, map, mapTo, switchMap, tap, withLatestFrom} from 'rxjs/operators'

const e: TEpic[] = []

e[e.length] = (action$, state$, {api}) =>
  action$.pipe(
    filter(restaurantActions.getRestaurant.match),
    switchMap(({payload}) => api.getRestaurant(payload)),
    map(res => {
      const state: TRestaurantState = {
        keys: [],
        restaurants: {},
      }
      const data = [res.data]
      data.forEach(p => {
        state.restaurants[p._id] = p
        state.keys.push(p._id)
      })
      return state
    }),
    map(restaurantActions.setRestaurants),
    onError(state$),
  )

e[e.length] = (action$, state$, {api}) =>
  action$.pipe(
    filter(restaurantActions.redeem.match),
    withLatestFrom(state$),
    switchMap(([{payload}, {auth}]) => api.redeemPoints({promoId: payload, sub: auth.sub})),
    mapTo(pointActions.getRankings()),
    tap(() => Alert.alert('Redeemed', 'Successfully exchanged points')),
    onError(state$),
  )

export const restaurantEpics = e
