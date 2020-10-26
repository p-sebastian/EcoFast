import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {Camera} from 'react-native-maps'

type State = {
  camera: Camera
}

const INITIAL_STATE: State = {
  camera: {
    center: {
      latitude: -2.132369,
      longitude: -79.866105,
    },
    altitude: 8000,
    heading: 0,
    zoom: 1,
    pitch: 0,
  },
}

const mapSlice = createSlice({
  name: '@map',
  initialState: INITIAL_STATE,
  reducers: {
    setCamera: (state, {payload}: PayloadAction<Partial<Camera>>) => {
      state.camera = {...state.camera, ...payload}
    },
  },
})

export const mapActions = mapSlice.actions
export const mapReducer = mapSlice.reducer
