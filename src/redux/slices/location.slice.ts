import {PayloadAction, createSlice} from '@reduxjs/toolkit'

import {TLocation} from './location.interface'

type State = {
  keys: string[]
  locations: {[id: string]: TLocation}
}

const INITIAL_STATE: State = {
  keys: [],
  locations: {},
}

const locationSlice = createSlice({
  name: '@location',
  initialState: INITIAL_STATE,
  reducers: {
    getLocations: () => {},
    setLocations: (_, {payload}: PayloadAction<State>) => payload,
  },
})

export const locationActions = locationSlice.actions
export const locationReducer = locationSlice.reducer
