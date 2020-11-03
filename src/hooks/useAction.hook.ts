import {authActions} from '@slices/auth.slice'
import {locationActions} from '@slices/location.slice'
import {mapActions} from '@slices/map.slice'
import {pointActions} from '@slices/point.slice'
import {restaurantActions} from '@slices/restaurant.slice'
import {useCallback} from 'react'
import {useDispatch} from 'react-redux'

/*
 * ** Usage **
 * const useAction = makeHook(authActions)
 * const action = useAction('confirmSignUp')
 */
function makeActionHook<T>(actions: T) {
  return <A extends keyof T>(action: A, isNull = false): T[A] => {
    const dispatch = useDispatch()
    const act = actions[action] as any
    const callback = isNull ? () => dispatch(act()) : (payload: any) => dispatch(act(payload))
    return useCallback(callback, []) as any
  }
}

export const useAuthAction = makeActionHook(authActions)
export const useLocationAction = makeActionHook(locationActions)
export const useMapAction = makeActionHook(mapActions)
export const usePointAction = makeActionHook(pointActions)
export const useRestaurantAction = makeActionHook(restaurantActions)
