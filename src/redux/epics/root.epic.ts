import {combineEpics} from 'redux-observable'

import {authEpics} from './auth.epic'
import {locationEpics} from './location.epic'
import {pointEpics} from './point.epic'
import {restaurantEpics} from './restaurant.epic'

export const rootEpic = combineEpics(...authEpics, ...locationEpics, ...pointEpics, ...restaurantEpics)
