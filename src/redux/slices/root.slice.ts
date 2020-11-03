import {combineReducers} from 'redux'

import {authReducer} from './auth.slice'
import {locationReducer} from './location.slice'
import {mapReducer} from './map.slice'
import {pointReducer} from './point.slice'
import {restaurantReducer} from './restaurant.slice'

export const rootReducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
  map: mapReducer,
  point: pointReducer,
  restaurant: restaurantReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type TLocationState = ReturnType<typeof locationReducer>
export type TPointState = ReturnType<typeof pointReducer>
export type TRestaurantState = ReturnType<typeof restaurantReducer>
