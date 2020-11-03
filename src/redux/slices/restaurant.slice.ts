import {PayloadAction, createSlice} from '@reduxjs/toolkit'

import {TRestaurant} from './restaurant.interface'

type State = {
  keys: string[]
  restaurants: {[id: string]: TRestaurant}
}

const INITIAL_STATE: State = {
  keys: [],
  restaurants: {},
}

const restaurantSlice = createSlice({
  name: '@restaurant',
  initialState: INITIAL_STATE,
  reducers: {
    getRestaurant: (_, {}: PayloadAction<string>) => {},
    setRestaurants: (_, {payload}: PayloadAction<State>) => payload,
    redeem: (_, {}: PayloadAction<string>) => {},
  },
})

export const restaurantActions = restaurantSlice.actions
export const restaurantReducer = restaurantSlice.reducer
