import {PayloadAction, createSlice} from '@reduxjs/toolkit'

import {AuthSignInPayload} from './auth.interface'

export enum AuthStateEnum {
  None = 'none',
  SignedIn = 'signed_in',
  Registered = 'registered',
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
  reducers: {
    signUp: (_, {}: PayloadAction<AuthSignInPayload>) => {},
    registered: (state) => {
      state.status = AuthStateEnum.Registered
    },
    login: (_, {}: PayloadAction<AuthSignInPayload>) => {},
    signedIn: (state) => {
      state.status = AuthStateEnum.SignedIn
    },
  },
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
