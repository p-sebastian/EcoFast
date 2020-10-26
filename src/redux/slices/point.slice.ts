import {PayloadAction, createSlice} from '@reduxjs/toolkit'

import {TPoint} from './point.interface'

type State = {
  keys: string[]
  points: {[id: string]: TPoint}
}

const INITIAL_STATE: State = {
  keys: [],
  points: {},
}

const pointSlice = createSlice({
  name: '@point',
  initialState: INITIAL_STATE,
  reducers: {
    recycle: (_, {}: PayloadAction<{amount: number; location: string}>) => {},
    getRankings: () => {},
    setRankings: (_, {payload}: PayloadAction<State>) => payload,
  },
})

export const pointActions = pointSlice.actions
export const pointReducer = pointSlice.reducer
