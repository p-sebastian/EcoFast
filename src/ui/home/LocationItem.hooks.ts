import {useMapAction, usePointAction} from '@hooks/useAction.hook'
import {useASelector} from '@util/recipies.util'
import {useCallback} from 'react'
import {Alert} from 'react-native'

const useLocationItem = (id: string) => {
  const recycle = usePointAction('recycle')
  const location = useASelector(state => state.location.locations[id], [id])
  const {latitude, longitude} = location
  const action = useMapAction('setCamera')

  const onPress = useCallback(() => action({center: {latitude, longitude}, altitude: 1000}), [])
  const onLongPress = useCallback(async () => {
    const ans = await prompt()
    const amount = Number(ans)
    if (!amount || isNaN(amount)) {
      return Alert.alert('Error', 'Only numbers allowed')
    }
    recycle({location: id, amount})
  }, [id])

  return {location, onPress, onLongPress}
}

export const LocationItemHooks = {useLocationItem}
const prompt = async () =>
  new Promise<string>(resolve => Alert.prompt('Recycle', 'How many bags would you like to recycle?', resolve))
