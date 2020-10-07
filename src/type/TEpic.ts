import {RootState} from '@slices/root.slice'
import {AnyAction} from 'redux'
import {Epic} from 'redux-observable'

import {TServices} from './TServices'

export type TEpic = Epic<AnyAction, AnyAction, RootState, TServices>
