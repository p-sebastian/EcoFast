import {TEpic} from '@type/TEpic'
import {combineEpics} from 'redux-observable'

export const rootEpic = combineEpics(...([] as TEpic[]))
