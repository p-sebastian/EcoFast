import {RootState} from '@ui/redux/slices/root.slice'
import {AnyAction} from 'redux'
import {Epic} from 'redux-observable'

export type TEpic = Epic<AnyAction, AnyAction, RootState>
