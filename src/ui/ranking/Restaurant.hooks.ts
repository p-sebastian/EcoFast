import {usePointAction, useRestaurantAction} from '@hooks/useAction.hook'
import {useASelector} from '@util/recipies.util'

const useRestaurant = () => {
  const restaurant = useASelector(state => state.restaurant.restaurants[state.restaurant.keys[0]])
  const redeem = useRestaurantAction('redeem')
  const toggle = usePointAction('toggleQr')

  const onPress = (id: string) => () => {
    redeem(id)
    toggle(false)
  }

  return {restaurant, onPress}
}

export const RestaurantHooks = {useRestaurant}
