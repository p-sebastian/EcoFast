import {PayloadAction, createSlice} from '@reduxjs/toolkit'

import {TPoint} from './point.interface'

type State = {
  keys: string[]
  points: {[id: string]: TPoint}
  qrOpen: boolean
}

const INITIAL_STATE: State = {
  keys: [],
  points: {},
  qrOpen: false,
}

const pointSlice = createSlice({
  name: '@point',
  initialState: INITIAL_STATE,
  reducers: {
    recycle: (_, {}: PayloadAction<{amount: number; location: string}>) => {},
    getRankings: () => {},
    setRankings: (state, {payload}: PayloadAction<Omit<State, 'qrOpen'>>) => {
      return {...state, ...payload}
    },
    toggleQr: (state, {payload}: PayloadAction<boolean>) => {
      state.qrOpen = payload
    },
  },
})

export const pointActions = pointSlice.actions
export const pointReducer = pointSlice.reducer
