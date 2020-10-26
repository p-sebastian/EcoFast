import {useLocationAction} from '@hooks/useAction.hook'
import {useASelector} from '@util/recipies.util'
import {useEffect} from 'react'

const useHome = () => {
  const keys = useLocations()
  const camera = useASelector(state => state.map.camera)

  return {keys, camera}
}

export const HomeHooks = {useHome}

const useLocations = () => {
  const getLocations = useLocationAction('getLocations')
  const keys = useASelector(state => state.location.keys)

  useEffect(() => {
    getLocations()
  }, [])

  return keys
}
