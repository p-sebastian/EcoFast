import {RootState} from '@ui/redux/slices/root.slice'
import {useCallback} from 'react'
import {Selector, useSelector} from 'react-redux'

/**
 * to use when returning a primitive value from
 * the selector
 * @prop props required when selector has value in closure,
 * else it wont re-render when said value changes
 * eg: state => state.server[serverKey].status; serverKey is the prop
 */
export const useASelector = <TSelected, TState = RootState>(
  selector: Selector<TState, TSelected>,
  props?: any,
) => useSelector<TState, TSelected>(useCallback(selector, [props]))

/**
 * takes any prop value from an styled component
 * must pass generic with props type
 * @param key of Prop in styled component
 */
export const extractProp = <P extends unknown>(key: keyof P, or?: any) => (
  props: P,
) => (props[key] === undefined ? or : props[key])

export const extractFn = <P extends unknown>(
  key: keyof P,
  callback: (prop: P[typeof key]) => any,
) => (props: P) => callback(props[key])

// export const takeColor = <P extends {theme: AppTheme}>(
//   key: keyof AppTheme['colors'],
// ) => (props: P) => props.theme.colors[key]
// export const takeFont = <P extends {theme: AppTheme}>(
//   key: keyof AppTheme['fonts'],
// ) => (props: P) => props.theme.fonts[key]
