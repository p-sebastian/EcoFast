import {combineEpics} from 'redux-observable'

import {authEpics} from './auth.epic'
import {locationEpics} from './location.epic'
import {pointEpics} from './point.epic'

export const rootEpic = combineEpics(...authEpics, ...locationEpics, ...pointEpics)
