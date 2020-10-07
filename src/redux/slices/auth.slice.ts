import {createSlice} from '@reduxjs/toolkit'

export enum AuthStateEnum {
  None = 'none',
  SignedIn = 'signed_in',
  Logoff = 'logoff',
}

type State = {
  status: AuthStateEnum
}

const INITIAL_STATE: State = {
  status: AuthStateEnum.None,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
